import { Row, Col, Card, ListGroup,Button } from 'react-bootstrap';
import React from 'react';

import './Search.css'

class ResTable extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            activeVal:'',


        }
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
                                    Duartion: {s.duartion} minutes</Col></Row></>)
                        }) : 'None'}
                    </Col>
                    <Col>Price</Col>
                    <Col xs={2}><Button size="sm" variant="outline-primary" active={f===this.props.act} value={f} onClick={e=>{this.props.setAct(this.props.type,e.target.value);console.log(e.target.value)}}>Select Flight</Button></Col>
                   
                </Row>
            </ListGroup.Item>)
        }
        console.log(flights)
        return (<>
            
            {res}
            
            </>
            ) 
    }
    getHeader() {
        const header = ['Departure Airport', 'Arrival Airport', 'Stops', 'Price']
        return (
            <>
            {header.map(h => <Col><b>{h}</b></Col>)}
            <Col xs={2}></Col>
            </>)
    }
    render() {
        return (<div>

            <h3 className='text'>Results for Flights from {this.props.pf} to {this.props.pt} on {this.props.date}</h3>
            <Card className='card'>
                <ListGroup variant="flush">

                    <Card.Header><Row>{this.getHeader()}</Row></Card.Header>

                    {this.getResults(this.props.data)}
                    
                </ListGroup>
            </Card>


        </div>)
    }
} export default ResTable