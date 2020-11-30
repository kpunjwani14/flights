import React from 'react';
import { Navbar, Form, Row, Col, Card, Button, InputGroup, FormControl, Dropdown } from 'react-bootstrap';
import './Homepage.css';

class HomePage extends React.Component {
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
                </Navbar>
                <section>
                    <h1>Flights</h1>

                    <Card className='card'>
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Col xs="auto" className="my-2">
                                        <Form.Label className="mr-sm-1" htmlFor="inlineFormCustomSelect" srOnly>
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="mr-sm-2"
                                            id="inlineFormCustomSelect"
                                            custom
                                        >
                                            <option value="One way">One way</option>
                                            <option value="Multi-city">Multi-city</option>
                                        </Form.Control>
                                    </Col>

                                    <Col xs="auto" className="my-2">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                </svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <li className='list'>
                                                    <label style={{ display: 'block', textAlign: 'center' }} for="adults">Adults</label>
                                                    <input type="number" placeholder='0' id="tentacles" name="tentacles"
                                                        min="1" max="5"></input>
                                                </li>

                                                <li className='list'>
                                                    <label for="children">Children</label>
                                                    <input type="number" placeholder='0' id="tentacles" name="tentacles"
                                                        min="0" max="5"></input>
                                                </li>

                                                <li className='list'>
                                                    <label for="infants">Infants</label>
                                                    <input type="number" placeholder='0' id="tentacles" name="tentacles"
                                                        min="0" max="5"></input>
                                                </li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>

                                    <Col xs="auto" className="my-2">
                                        <Form.Label className="mr-sm-1" htmlFor="inlineFormCustomSelect" srOnly>
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="mr-sm-2"
                                            id="inlineFormCustomSelect"
                                            custom
                                        >
                                            <option value="Economy">Economy</option>
                                            <option value="Premium economy">Premium economy</option>
                                            <option value="Business">Business</option>
                                            <option value="First">First</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Row>


                                <Form.Row>
                                    <Col xs={4}>
                                        <InputGroup className="mb-2">
                                            <FormControl placeholder="Leaving From" />
                                            <InputGroup.Append>
                                                <InputGroup.Text><svg width=".7em" height=".8em" viewBox="0 0 16 16" class="bi bi-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                </svg></InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col xs={4}>
                                        <InputGroup className="mb-2">
                                            <FormControl placeholder="Going To" />
                                            <InputGroup.Append>
                                                <InputGroup.Text><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg></InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                    </Col>
                                    <Col>
                                        <Form.Group controlId="date from">
                                            <Form.Control type="date" name="date from" placeholder="Date" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="date to">
                                            <Form.Control type="date" name="date to" placeholder="Date" />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                            </Form>
                            <Button className='button' variant="outline-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg> Search</Button>{' '}
                        </Card.Body>
                    </Card>
                </section>
            </div >
        )
    }
}

export default HomePage