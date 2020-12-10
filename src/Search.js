import React from 'react';
import './Search.css';
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
            adult: 0,
            child: 0,
            infant: 0,
            dateFrom: '',
            dateTo: '',
            displayTo: '',
            displayFrom: '',
            render: false,
            valTo: '',
            valFrom: '',
            econ: ''


        }
        this.setActiveBut = this.setActiveBut.bind(this)
    }
    setActiveBut(which, val) {
        this.setState({ [which]: val })
    }
    componentDidMount() {
        this.checkDB()
    }
    inRange(x, min = 0) {
        return x >= min && x <= 5
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
        let st = {}
        while (i < val_params.length) {
            const v = this.state.params.get(val_params[i])

            if (!v) {
                return this.setErr()

            }

            if (this.state[val_params[i]] !== undefined)
                st[val_params[i]] = v

            queryParams += (val_params[i] + '=' + v + '&')
            i++
        }

        var dt = this.state.params.get('dateTo')
        if (dt) {
            var sp = this.formatDate(dt)
            queryParams += ('dateTo=' + dt)
            if (sp === false)
                return this.setErr()

            st.dateTo = dt
            st.displayTo = sp.join('-')

        }
        else
            queryParams = queryParams.slice(0, -1)

        var df = this.formatDate(this.state.params.get('dateFrom'))
        if (df === false) {

            return this.setErr()
        }
        st.displayFrom = df.join('-')
        let seats = 0

        while (j < int_params.length) {
            const k = this.state.params.get(int_params[j])

            if (!k || isNaN(k)) {
                return this.setErr()
            }

            st[int_params[j]] = parseInt(k)
            seats += parseInt(k)
            j++
        }
        if (!this.inRange(st.adult, 1) || !this.inRange(st.child) || !this.inRange(st.infant))
            return this.setErr()

        queryParams += ('&seats=' + seats)


        try {

            const searchResult = await axios(encodeURI('http://localhost:7000/search?' + queryParams))

            console.log(searchResult.data)
            this.setState({ data: searchResult.data, render: true, ...st })


        }
        catch (e) {

            this.setErr()
        }
    }
    setErr() {
        this.setState({ isErr: true })
    }
    getTotal() {
        return this.state.adult + this.state.child
    }
    checkAll() {
        return this.state.data[0].length > 0 && (this.state.dateTo === '' || this.state.data[1].length > 0)
    }
    checkTo() {
        return this.state.dateTo !== '' && this.state.data[1].length > 0
    }

    render() {
        return (
            <div>
                {this.state.isErr && <Redirect to={{
                    pathname: "/"
                }} />}

                <div className='container'>




                    {this.state.render && (this.checkAll()) && <ResTable ext={this.state.econ==='business'} disc={this.state.dateTo!==''} tot={this.getTotal()} data={this.state.data[0]} pf={this.state.placeFrom} pt={this.state.placeTo} type='valFrom' act={this.state.valFrom} setAct={this.setActiveBut} date={this.state.displayFrom} />}
                    {this.state.render && this.checkTo() && this.state.data[0].length > 0 && <ResTable ext={this.state.econ==='business'} disc={this.state.dateTo!==''} tot={this.getTotal()} act={this.state.valTo} data={this.state.data[1]} type='valTo' setAct={this.setActiveBut} pf={this.state.placeTo} pt={this.state.placeFrom} date={this.state.displayTo} />}
                    {this.state.render && !this.checkAll() && <h3 className='text'>NO RESULTS FOUND!</h3>}
                    {this.state.valFrom !== '' && (this.state.dateTo === '' || this.state.valTo !== '') && <Redirect to={{ pathname: '/checkout', search: `econ=${this.state.econ}&adult=${this.state.adult}&child=${this.state.child}&infant=${this.state.infant}&flightIDA=${this.state.valFrom}${this.state.valTo !== '' ? (`&flightIDB=${this.state.valTo}`) : (``)}` }} />}


                </div>

            </div >
        )
    }
}

export default Search