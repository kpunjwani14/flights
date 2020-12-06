import React from 'react';
import './Search.css';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import ResTable from './ResTable'
class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            params: new URLSearchParams(this.props.location.search),
            data: [],
            isErr: false,
            placeFrom: '',
            placeTo: '',
            adults: 0,
            child: 0,
            infant: 0,
            dateFrom: '',
            dateTo: '',
            displayTo: '',
            displayFrom: '',
            render: false

        }

    }
    componentDidMount() {
        this.checkDB()
    }
    getResults(results) {
        let flights = {}
        let res = []
        console.log(results);
        results.forEach(d => {
            if (!flights[d.flight_id])
                flights[d.flight_id] = {}
            if (!flights[d.flight_id]['stops'])
                flights[d.flight_id]['stops'] = []
            flights[d.flight_id]['departure_airport'] = d.aira
            flights[d.flight_id]['arrival_airport'] = d.airb
            if (d.airc)
                flights[d.flight_id]['stops'].push({ 'airport': d.airc, 'duartion': d.duration })

        });
        for (let f in flights) {
            let x = flights[f]

            res.push(<ListGroup.Item>
                <Row>

                    <Col>{x.departure_airport}</Col>
                    <Col>{x.arrival_airport}</Col>
                    <Col>
                        {x.stops[0] ? x.stops.map(s => {
                            return (<>

                                <Row><Col>
                                    {s.airport}</Col></Row>
                                <Row><Col>
                                    Duartion: {s.duartion}</Col></Row></>)
                        }) : 'None'}
                    </Col>
                    <Col>Price</Col>
                </Row>
            </ListGroup.Item>)
        }
        console.log(flights)
        return res
    }
    formatDate(d) {
        var s = d.split('-')
        if (!s[2])
            return false
        var c = s[0]
        s.splice(0, 1)
        s[2] = c
        return s
    }
    async checkDB() {

        let int_params = ['adult', 'child', 'infant']
        let queryParams = ''
        let val_params = ['dateFrom', 'placeTo', 'placeFrom', 'econ']
        let i = 0
        let j = 0
        while (i < val_params.length) {
            const v = this.state.params.get(val_params[i])

            if (!v) {
                return this.setErr()

            }

            if (this.state[val_params[i]] !== undefined)
                this.setState({ [val_params[i]]: v })
            queryParams += (val_params[i] + '=' + v + '&')
            i++
        }
        var dt = this.state.params.get('dateTo')
        if (dt) {
            var sp = this.formatDate(dt)
            queryParams += ('dateTo=' + dt)
            if (sp === false)
                return this.setErr()






            this.setState({ dateTo: dt, displayTo: sp.join('-') })

        }

        else
            queryParams = queryParams.slice(0, -1)

        var df = this.formatDate(this.state.params.get('dateFrom'))
        if (df === false) {

            return this.setErr()
        }
        this.setState({ displayFrom: df.join('-') })
        let seats = 0

        while (j < int_params.length) {
            const k = this.state.params.get(int_params[j])

            if (!k || isNaN(k)) {
                return this.setErr()
            }

            this.setState({ [int_params[j]]: parseInt(k) })
            seats += parseInt(k)
            j++
        }
        queryParams += ('&seats=' + seats)


        try {

            const searchResult = await axios(encodeURI('http://localhost:7000/search?' + queryParams))

            console.log(searchResult.data)
            this.setState({ data: searchResult.data, render: true })


        }
        catch (e) {

            this.setErr()
        }
    }
    setErr() {
        this.setState({ isErr: true })
    }
    getHeader() {
        const header = ['Departure Airport', 'Arrival Airport', 'Stops', 'Price']
        return (header.map(h => <Col><b>{h}</b></Col>))
    }
    checkTo() {
        return this.state.data[0].length > 0 && (this.state.dateTo === '' || this.state.data[1].length > 0)
    }

    render() {
        return (
            <div>
                {this.state.isErr && <Redirect to={{
                    pathname: "/"
                }} />}

                <div class='container'>




                    {this.state.render && (this.checkTo()) && <ResTable data={this.state.data[0]} pf={this.state.placeFrom} pt={this.state.placeTo} date={this.state.displayFrom} />}
                    {this.state.render && this.state.dateTo!==''&&this.state.data[0].length > 0 && this.state.data[1].length > 0 && <ResTable data={this.state.data[1]} pf={this.state.placeTo} pt={this.state.placeFrom} date={this.state.displayTo} />}
                    {this.state.render && !this.checkTo() && <h3 className='text'>NO RESULTS FOUND!</h3>}


                </div>

            </div >
        )
    }
}

export default Search