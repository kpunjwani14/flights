import React from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap'

class Lookup extends React.Component {
    render() {
        return (
            <div>
                <h1>My Flights</h1>
                <p style={{ textAlign: 'center' }}>See your upcoming or waitlisted flights, or edit/delete your flights.</p>
                <div className='col d-flex justify-content-center'>
                    <Card style={{ width: '90%' }}>
                        <Card.Body>
                            <Card.Title>Find your trip</Card.Title>
                            <Form noValidate validated>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Book Reference Number</Form.Label>
                                    <Form.Control minlength='6' maxlength='6' required size="lg" type="text" placeholder="ex. 003EB0" />
                                    <Form.Text className="text-muted">
                                        This was given to you at the time of booking
    </Form.Text>
                                </Form.Group>
                            </Form>

                            <Button size='lg' className='button' type='submit' variant="outline-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg> Search</Button>{' '}
                        </Card.Body>
                    </Card>
                </div>

                <h1>Results</h1>
                <Card style={{ width: '30%' }}>
                    <Card.Header>
                        <span>
                            <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                            </svg>
                            <h4 style={{ display: "inline" }}>Flight info</h4>
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>One way flight</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">2 tickets: 2 adults </Card.Subtitle>
                        <hr />
                        <b>Houston (IAH) to Buffalo (BUF)</b>
                        <p>Tuesday, Dec 12 <br /> 6:23am - 1:01pm (5h 38m) <br />1h 30m stop in CLT</p>

                        <hr />
                        <b>Your price summary</b>
                        <p>Traveler 1: $314.20 <br /> Traveler 2: $314.20</p>
                        <Card.Link href="#">Edit flight</Card.Link>
                        <Card.Link href="#">Delete flight</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Lookup