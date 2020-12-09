import { Row, Col, Card, ListGroup,Button } from 'react-bootstrap';
import React from 'react';

import './Search.css'

class ResTable extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.tot)
        this.state={
            activeVal:'',


        }
    }
    getHours(dateB,dateA=0){
        
        const x=(dateB-dateA)/(60000)
        const z=Math.floor(x/60)
        const y=x%60
        
        return (z>0?z+`h `:'')+ (y>0?`${y}m`:'')
    }
  
    getTime(time){
        return time.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true })
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
            flights[d.flight_id]['price']=d.price
            flights[d.flight_id].scheduled_departure=new Date(d.scheduled_departure)
            flights[d.flight_id].scheduled_arrival=new Date(d.scheduled_arrival) 
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
                                    Duartion: {this.getHours(s.duartion*60000)}</Col></Row></>)
                        }) : 'None'}
                    </Col>
                    <Col>${parseInt(this.props.disc?(x.price-75):x.price)*this.props.tot}.00</Col>
                    <Col><Row><Col>{this.getTime(x.scheduled_departure)}{'-'+this.getTime(x.scheduled_arrival)}</Col></Row>
                    <Row><Col>{this.getHours(x.scheduled_arrival,x.scheduled_departure)}</Col></Row></Col>
                    <Col><Button size="sm" variant="outline-primary" active={f===this.props.act} value={f} onClick={e=>{this.props.setAct(this.props.type,e.target.value);console.log(e.target.value)}}>Select Flight</Button></Col>
                   
                </Row>
            </ListGroup.Item>)
        }
        
        return (<>
            
            {res}
            
            </>
            ) 
    }
    getHeader() {
        const header = ['Departure Airport', 'Arrival Airport', 'Stops', 'Price','Times']
        return (
            <>
            {header.map(h => <Col><b>{h}</b></Col>)}
            <Col></Col>
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