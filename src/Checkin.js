import React from 'react';
import './Checkin.css';
import { Nav, Navbar, Form, Row, Col, Button, Carousel, Card } from 'react-bootstrap';

class Checkin extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="favicon.ico"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
      Flights
    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Book</Nav.Link>
                            <Nav.Link href="#my-flights">My Flights</Nav.Link>
                            <Nav.Link href="#check-in">Check-in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div class='content'>
                    <Carousel class='carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2 style={{ fontFamily: "'EB Garamond', serif" }}>Check-in</h2>
                                <h4 style={{ fontFamily: "'EB Garamond', serif" }}>Check-in at your convenience and print your boarding pass from the comfort of your home.</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h2 style={{ fontFamily: "'EB Garamond', serif " }}>COVID-19</h2>
                                <h3 style={{ fontFamily: "'EB Garamond', serif " }}>Risk of COVID-19 exposure on our flights is almost non-existent</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1518317507427-5346735246ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h2 className='font' style={{ fontSize: '70px' }}>Holiday Deals</h2>
                                <h3 className='font' style={{ fontSize: '40px' }}>Buy more, get more</h3>
                                <h4 className='font' style={{ fontSize: '30px' }}>Book today and get up to 20% off</h4>
                                <h5 className='font' style={{ fontSize: '20px' }}>Promo Code: holiday</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <Card border="light" style={{ width: '98%', marginBottom: '10px' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body>
                            <Card.Title>Check-in</Card.Title>
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
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Button size="lg" className='button' variant="primary">Search flight</Button>{' '}
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