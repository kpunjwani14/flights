import React from 'react';
import './Checkin.css';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import './Example'
import Example from './Example';

class Checkin extends React.Component {
    render() {
        return (
            <div>
                <div class='content'>
                    <h1>Check-in</h1>
                    <Card style={{ width: '90%' }}>
                        <Card.Img style={{ height: '20rem' }} variant="top" src="https://images.unsplash.com/photo-1522153588464-5dba4c1983c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
                        <Card.Body>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Check-in is available starting 24 hours before your scheduled departure.
      </Card.Text>
                            <Form noValidate validated>
                                <Form.Row>
                                    <Form.Group className='col-md-4' as={Col} controlId="formGridEmail">
                                        <Form.Label>Ticket number</Form.Label>
                                        <Form.Control pattern="\d+" required type="text" />
                                    </Form.Group>

                                    <Form.Group className='col-md-4' as={Col} controlId="formGridPassword">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control required type="text" />
                                    </Form.Group>

                                    <Form.Group className='col-md-4' as={Col} controlId="formGridPassword">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control required type="text" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Example />
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

export default Checkin