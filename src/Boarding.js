import React from 'react';
import './Boarding.css';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

class Boarding extends React.Component {
    render() {
        return (
            <div>


                <div class='content'>


                    <Card border="light" style={{ width: '98%', marginBottom: '10px' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body>
                            <Card.Title>Boarding</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Check-in is available starting 24 hours before your scheduled departure.
      </Card.Text>
                            <Form>
                                <Form.Row>
                                    <Form.Group className='col-md-4' as={Col} controlId="formGridEmail">
                                        <Form.Label>Ticket number</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className='col-md-4' as={Col} controlId="formGridPassword">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className='col-md-4' as={Col} controlId="formGridPassword">
                                        <Form.Label>Boarding name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>


                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Button size="md" type="submit" className='button' variant="primary">Search flight</Button>
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