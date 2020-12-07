import React from 'react';
import { Form, Col, Card, Button, InputGroup, FormControl, Dropdown, Carousel } from 'react-bootstrap';
import './Homepage.css';
import { Redirect } from 'react-router-dom';

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {

            validated: false,
            isValid: false,
            tripType: 'One Way',
            dateTo: '',
            params: {
                adult: 1,
                child: 0,
                infant: 0,
                placeTo: '',
                placeFrom: '',


                econ: 'econ',
                dateFrom: this.getDate(),

            }

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

            event.stopPropagation();
        }
        else {
            this.setState({ isValid: true })
        }

        event.preventDefault();
        this.setState({ validated: true }, () => {
            console.log(this.state)
        })

    }
    getDate() {
        const x = new Date()
        var mon = (x.getMonth() + 1) % 13
        var dat = x.getDate()
        if (dat < 10)
            dat = '0' + dat
        if (mon < 10)
            mon = '0' + mon

        return x.getFullYear() + '-' + (mon) + '-' + (dat)

    }
    getQueryParams() {
        const j = this.state.params
        let param = ''
        if (this.state.tripType == 'Round-Trip')
            param += ('dateTo' + '=' + this.state.dateTo + '&')
        for (let i in this.state.params) {

            param += (i + '=' + j[i] + '&')
        }

        param = param.slice(0, -1)


        return encodeURI(param)
    }
    render() {
        return (

            <div>
                {this.state.isValid && <Redirect
                    to={{
                        pathname: "/search",
                        search: this.getQueryParams(),

                    }}
                />}

                <Carousel >
                    <Carousel.Item className='car'>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h2 className='car-text car-heading'>Check-in</h2>
                            <h4 className='car-text'>Check-in at your convenience and print your boarding pass from the comfort of your home.</h4>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item className='car'>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className='car-text car-heading'>COVID-19</h2>
                            <h3 className='car-text'>Risk of COVID-19 exposure on our flights is almost non-existent</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='car'>
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
                <section>


                    <Card className='card'>
                        <Card.Body>
                            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                                <Form.Row className="row">
                                    <Col xs="auto" className="my-2">
                                        <Form.Label className="mr-sm-1" htmlFor="inlineFormCustomSelect" srOnly>
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="mr-sm-2"
                                            id="inlineFormCustomSelect"
                                            custom
                                            required
                                            value={this.state.tripType}
                                            onChange={(e) => { this.setState(prevState => ({ tripType: e.target.value })) }}

                                        >
                                            <option value="One Way">One Way</option>
                                            <option value="Round-Trip">Round Trip</option>
                                        </Form.Control>
                                    </Col>

                                    <Col xs="auto" className="my-2">
                                        <Dropdown  >
                                            <Dropdown.Toggle id="dropdown-basic" >
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                </svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu flip={false}>


                                                <Form.Row>
                                                    <Col xs={5}>
                                                        <Form.Label className="lab" for="adults">Adults</Form.Label>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Form.Control type="number" id="adults" name="adults"
                                                            min="1" max="5" value={this.state.params.adult} required onChange={(e) => { this.setState(prevState => ({ params: { ...prevState.params, adult: e.target.value } })) }}></Form.Control>
                                                    </Col>

                                                </Form.Row>
                                                <Form.Row>
                                                    <Col xs={5}>
                                                        <Form.Label className="lab" for="children" name="children">Kids</Form.Label>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Form.Control value={this.state.params.child} onChange={(e) => { this.setState(prevState => ({ params: { ...prevState.params, child: e.target.value } })) }} type="number" id="tentacles" name="tentacles"
                                                            min="0" max="5"></Form.Control>
                                                    </Col>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Col xs={5}>
                                                        <Form.Label className="lab" for="infants" name="infants">Infants</Form.Label>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Form.Control value={this.state.params.infant} onChange={(e) => { this.setState(prevState => ({ params: { ...prevState.params, infant: e.target.value } })) }} type="number" id="tentacles" name="tentacles"
                                                            min="0" max="5"></Form.Control>
                                                    </Col>
                                                </Form.Row>


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
                                            required
                                            value={this.state.params.econ}
                                            onChange={(e) => { this.setState(prevState => ({ params: { ...prevState.params, econ: e.target.value } })) }}

                                        >
                                            <option value="econ">Economy</option>
                                            <option value="business">Business</option>

                                        </Form.Control>
                                    </Col>
                                </Form.Row>


                                <Form.Row className="row">
                                    <Col lg={5}>
                                        <InputGroup className="mb-2">
                                            <FormControl placeholder="Leaving From (City, State/Country)" required
                                                onChange={(e) => { this.setState(prevState => ({ params: { ...prevState.params, placeFrom: e.target.value } })) }} />
                                            <InputGroup.Append>
                                                <InputGroup.Text><svg width=".7em" height=".8em" viewBox="0 0 16 16" class="bi bi-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                </svg></InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={5}>
                                        <InputGroup className="mb-2">
                                            <FormControl placeholder="Going To (City, State/Country)" required
                                                onChange={(e) => { this.setState(prevState => ({ params: { ...prevState.params, placeTo: e.target.value } })) }} />
                                            <InputGroup.Append>
                                                <InputGroup.Text><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg></InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                    </Col>
                                </Form.Row>
                                <Form.Row className="row">
                                    <Col md={4}>


                                        <Form.Control
                                            onChange={(e) => { this.setState(prevState => ({ params: { ...prevState.params, dateFrom: e.target.value } })) }}
                                            className='dates' required type="date" name="date from" placeholder="One Way"
                                            min={this.getDate()}
                                        />



                                    </Col>
                                    {this.state.tripType === 'Round-Trip' &&
                                        <>
                                            <Col md={.2}  >
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                                </svg>
                                            </Col>
                                            <Col md={4}>

                                                <Form.Group controlId="date to">

                                                    <Form.Control
                                                        onChange={(e) => { this.setState(prevState => ({ dateTo: e.target.value })) }}
                                                        className='dates' required type="date" name="date to"
                                                        min={this.state.params.dateFrom}
                                                    />


                                                </Form.Group>
                                            </Col></>}

                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Button className='button' type='submit' variant="outline-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                        </svg> Search</Button>{' '}
                                    </Col>
                                </Form.Row>
                            </Form>

                        </Card.Body>
                    </Card>
                </section>
            </div >
        )
    }
}

export default HomePage