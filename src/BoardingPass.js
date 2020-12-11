import React from 'react';
import { Card, Image, Row, Col, Alert } from 'react-bootstrap'
import logo from './favicon.ico'

class BoardingPass extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div >
                <Alert style={{ textAlign: 'center' }} variant="success">
                    You have sucessfully checked in to your flight!
                </Alert>
                <h2 style={{ textAlign: 'center' }}>Boarding pass</h2>
                <p style={{ textAlign: 'center' }}>Please download or print your boarding pass. Boarding will start 75 minutes before your flight.</p>
                <Card style={{ width: '85%' }}>
                    <Card.Header style={{ backgroundColor: '#dfe7f5' }}>
                        <Image style={{ marginRight: '8px' }} width='30px' height='30px' src={logo} />
                            Flights
                        </Card.Header>
                    <Card.Body style={{ backgroundColor: '#f7fafc' }}>


                        <Row>

                            <Col md={4}>
                                FLIGHT
                                    <h5>{this.props.data.flightID}</h5>
                            </Col>
                            <Col md={4}>
                                TICKET NO
                                    <h5>{this.props.data.ticketNo}</h5>
                            </Col>
                            <Col md={4}>
                                SEAT
                                    <h5>18B</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                FROM:
                                    <h6 style={{ display: 'inline', marginLeft: '4px' }}>{this.props.data.depart}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ marginBottom: '7px' }} md={12}>
                                TO:
                                    <h6 style={{ display: 'inline', marginLeft: '4px' }}>{this.props.data.arr}</h6>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                GATE
                                    <h5>{Math.floor(Math.random()*50) }</h5>
                            </Col>
                            <Col md={4}>
                                BOARDING TIME
                                    <h5>{this.props.data.date}</h5>
                            </Col>
                            <Col md={4}>
                                BAGGAGE CLAIM NO
                             <h5>{Math.floor(Math.random()*10) }C</h5>
                            </Col>
                        </Row>

                        <Card.Text style={{ marginTop: '8px' }}>
                            Gate closes 25 minutes before departure.
    </Card.Text>
                        <Image width='260px' height='50px' src='https://www.baeldung.com/wp-content/uploads/2020/01/pdf417-barbecue-3.png' />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default BoardingPass