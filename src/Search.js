import React from 'react';
import './Search.css';
import { Nav, Navbar, Form, Row, Col, Card, ListGroup } from 'react-bootstrap';

class Search extends React.Component {
    render() {
        return (
            <div>


                <div class='container'>
                    <h3>Card</h3>

                    <Card style={{ width: '100%' }}>
                        <ListGroup variant="flush">
                            <Card.Header><b>Departing flights</b></Card.Header>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Departure aiport</Col>
                                    <Col>Arrival airport</Col>
                                    <Col>Scheduled departure</Col>
                                    <Col>Scheduled arrival</Col>
                                    <Col>Price</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Depart</Col>
                                    <Col>Arrive</Col>
                                    <Col>Stops</Col>
                                    <Col>Duration</Col>
                                    <Col>Price</Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>


                </div>

            </div >
        )
    }
}

export default Search