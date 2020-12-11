import React from 'react';
import './Boarding.css';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import BoardingModal from './BoardingModal';

class Boarding extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div class='content'>
                    <h1>Boarding</h1>
                    <Card style={{ width: '90%' }}>
                        <Card.Img style={{ height: '20rem' }} variant="top" src="https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" />
                        <Card.Body>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Boarding starts 75 minutes before your flight.
      </Card.Text>
                            <Form noValidate validated>
                                <Form.Row>
                                    <Form.Group className='col-md-6' as={Col} controlId="formGridEmail">
                                        <Form.Label>Ticket number</Form.Label>
                                        <Form.Control pattern="\d+" required type="text" />
                                    </Form.Group>

                                    <Form.Group className='col-md-6' as={Col} controlId="formGridPassword">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control required type="text" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <BoardingModal />
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        )
    }
}

export default Boarding