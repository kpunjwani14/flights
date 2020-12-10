import React from 'react';
import axios from 'axios'
import './Booking.css';
import { Accordion, Card, Alert, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import BookingModal from './BookingModal'


class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.setInput = this.setInput.bind(this)
        this.setTravS = this.setTravS.bind(this)
        this.randInput = this.randInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            returned: false,
            results:{waitlist:'',tickets:[],bookRef:''}, 
            running:false,
            promo: '',
            promoApplied: false,
            isValid: false,
            validated: false,
            discountRate: 0,
            isErr: false,
            flightIDB: '',
            totP: 0,
            fData: [],
            render: false,
            customer: { email: '', phoneNumber: '', name: '' },
            payment: { cardNo: '', expMon: '', expYr: '', secCode: '', address: '', city: '', state: '', zip: '' },
            travelers: {},

            reqParams: {
                adult: '',
                child: '',
                infant: '',
                econ: '',
                flightIDA: ''

            },
            params: new URLSearchParams(this.props.location.search)
        }
    }

    randInput(e) {
        let ran = {}
        const names = ['John', 'Sally', 'Jacob', 'Bob', 'Alex', 'Susie', 'Nathan', 'Andy', 'Natasha', 'Gabe', 'Pam', 'Angela', 'Michael', 'Gus', 'Jesse']
        const gen = ['m', 'f', 'm', 'm', 'm', 'f', 'm', 'm', 'f', 'm', 'f', 'f', 'm', 'm', 'f']
        let dobs = {
            adult: ['1999-12-15', '1999-11-29', '1995-08-15', '1988-05-03', '1996-04-03'],
            child: ['2010-11-02', '2009-05-04', '2015-01-02', '2014-08-04', '2013-06-03'],
            infant: ['2020-11-04', '2020-04-20', '2020-03-02', '2020-07-03', '2020-05-04']
        }
        const lNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson']
        
        const people = ['adult', 'child', 'infant']
        let counter = 0
        ran['travelers'] = {}
        people.forEach((p, ind) => {
            let dob = dobs[p]
            for (let x = 0; x < this.state.reqParams[p]; x++) {


                ran['travelers'][p + x] = {
                    name: names[counter],
                    lastName: lNames[counter],
                    dob: dob[x],
                    gender: gen[counter] === 'm' ? 'male' : 'female'
                }
                counter++

            }

        })
        ran.customer = {
            email: 'helloworld@gmail.com',
            name: 'World Hello',
            phoneNumber: '123456789'
        }
        ran.payment = {
            cardNo: '1234567890111213',
            expYr: '2023',
            expMon: '5',
            secCode: '123',
            address: '54321 Meadows Point',
            city: 'Houston',
            state: 'TX',
            zip: '87654'
        }
        this.setState({ customer: ran.customer, payment: ran.payment, travelers: ran.travelers })
        console.log(ran.travelers)

    }
    setInput(e) {
        const x = e.target.name.split('_')
        this.setState(prevState => ({
            [x[0]]: {
                ...prevState[x[0]],
                [x[1]]: e.target.value
            }
        }))
    }
    createShell(p) {
        const arr = ['adult', 'child', 'infant']
        let tr = {}
        p.forEach((t, ind) => {
            for (let x = 0; x < t; x++)
                tr[arr[ind] + x] = {
                    name: '',
                    lastName: '',
                    gender: '',
                    dob: ''
                }
        })
        return tr

    }
    setTravS(e) {
        const x = e.target.name.split('_')
        this.setState(prevState => ({
            travelers: {
                ...prevState.travelers,
                [x[0]]: {
                    ...prevState.travelers[x[0]],
                    [x[1]]: e.target.value
                }
            }
        }), () => console.log(this.state, 'state'))
    }

    formatData(data) {
        let flights = []

        data.forEach((d, ind) => {
            let sto = []


            let x = data[ind][0]
            data[ind].forEach((da) => {

                if (da.airc)
                    sto.push({ airp: da.airc, dur: this.getHours(da.duration * 60000) })
            })

            if (data[ind].length > 0)
                flights.push({
                    dept_air: x.aira,
                    arr_air: x.airb,
                    stops: sto,
                    pf: x.dc + ', ' + x.ds,
                    pt: x.ac + ', ' + x.as,
                    price: (parseInt(x.price) + (this.state.reqParams.econ === 'business' ? 200 : 0)),
                    taxes: (parseInt(x.price) + (this.state.reqParams.econ === 'business' ? 200 : 0)) * 0.0825,
                    dept_time: this.getTime(new Date(x.scheduled_departure)),
                    dept_date: this.getDate(new Date(x.scheduled_departure)),
                    arr_date: this.getDate(new Date(x.scheduled_arrival)),
                    arr_time: this.getTime(new Date(x.scheduled_arrival)),
                    interval: this.getHours(new Date(x.scheduled_arrival), new Date(x.scheduled_departure))


                })



        })

        this.setState({ fData: flights, render: true })
    }
    getDate(t) {
        return t.toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })
    }
    getTime(time) {
        return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
    getFlightInfo() {
        return this.state.fData.map(f => (

            <>
                <b key={f.dept_air}>{f.pf} ({f.dept_air}) to {f.pt} ({f.arr_air})</b>
                <br />{f.dept_date}<br /> {f.dept_time + ' - ' + f.arr_time} ({f.interval})<br />
                {f.stops.map(s => (
                    <>{s.dur} stop at {s.airp}<br /></>
                ))}

            </>
        ))
    }
    componentDidMount() {
        this.getDB()
    }
    async getDB() {


        try {
            const qp = this.validateParams()
            if (!qp)
                throw new Error("wrong qp")
            const res = await axios('http://localhost:7000/checkout?' + qp)
            console.log(res.data,'check')
            const x = res.data[0].length
            const y = res.data[1].length
            if (x > 0 && (this.state.flightIDB === '' || y > 0))
                this.formatData(res.data)
            else
                throw new Error("no flight match")

        }
        catch (e) {
            console.log(e)
            this.setErr()
        }
    }

    inRange(x, min = 0) {
        return x >= min && x <= 5
    }
    getHours(dateB, dateA = 0) {
        const x = (dateB - dateA) / (60000)
        const z = Math.floor(x / 60)
        const y = x % 60
        return (z > 0 ? z + `h ` : '') + (y > 0 ? `${y}m` : '')
    }
    validateParams() {

        const nums = ['adult', 'child', 'infant']
        const rp = this.state.reqParams

        let st = {}
        let tot = 0
        let param = ''
        for (let f in rp) {

            var x = this.state.params.get(f)

            if (!x)
                return false
            if (nums.find(n => (n === f))) {

                if (isNaN(x))
                    return false
                x = parseInt(x)
                tot += x

            }
            else
                param += (`${f + '=' + x}&`)
            st[f] = x
        }

        var y = this.state.params.get('flightIDB')
        if (!this.inRange(st.child) || !this.inRange(st.adult, 1) || !this.inRange(st.infant))
            return false
        param += (`${y ? `flightIDB=${y}&` : ''}seats=${tot}`)
        this.setState(prevState => (
            {
                flightIDB: (y ? y : prevState.flightIDB),
                totP: tot,
                travelers: this.createShell([st.adult, st.child, st.infant]),
                reqParams: {
                    ...prevState.reqParams,
                    ...st
                }
            }), () => { console.log(this.state) })


        return encodeURI(param)

    }
    setErr() {

        this.setState({ isErr: true })

    }
    async getPromos(c) {
        try {
            this.setState({ promoApplied: true })
            const res = await axios(`http://localhost:7000/promos?code=${encodeURIComponent(c)}`)
            console.log(res.data)
            if (res.data[0])
                this.setState({
                    discountRate: ((parseInt(res.data[0].discount)))

                }, () => console.log(this.state.discountRate, 'dr'))
            else
                throw (new Error('No Promo Match'))


        }
        catch (e) {
            this.setState({ promoApplied: false })
        }

    }

    getCountString() {
        const a = ['adult', 'child', 'infant']
        const plurals = ['Adults', 'Children', 'Infants']
        let s = this.state.totP + ' ' + (this.state.totP > 1 ? 'Travelers' : 'Traveler')
        s += ': '
        a.forEach((st, ind) => {

            let t = this.state.reqParams[st]

            s += ((t > 0 ? t + ' ' + (t === 1 ? st.charAt(0).toUpperCase() + st.slice(1) : plurals[ind]) + ', ' : ''))
        })
        s = s.slice(0, -2)
        return s
    }

    getPrices() {
        let p = []
 
        const a = ['adult', 'child', 'infant']
        const rate = [1, 1, 0]
        let disc = this.state.flightIDB !== '' ? 75 : 0
        let total = 0
        let tax = 0
        this.state.fData.forEach(f => {
            let count = 0
            p.push(<b>Flight from {f.dept_air} to {f.arr_air} <br /></b>)
            rate.forEach(((pe, ind) => {
                let ar = this.state.reqParams[a[ind]]
                for (let i = 0; i < ar; i++) {
                    let ip = ((f.price * pe - (a[ind] === 'infant' ? 0 : disc)) * (1 - (this.state.discountRate * .01)))
                    total += (ip + (ip * .0825))
                    tax += (ip * .0825)
                    p.push(<>
                        Traveler {++count}: ${ip.toFixed(2)}<br />
                    </>
                    )
                }
            }))
        })

        return (
            <>
                {p}
                <b>Taxes:</b><br /> ${tax.toFixed(2)}<br />
                <b>Total:</b><br /> ${total.toFixed(2)}</>
        )
    }
    handleSubmit(event) {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

            event.stopPropagation();
        }
        else {
            this.setState({ isValid: true })
            this.sendData()
        }

        event.preventDefault();
        this.setState({ validated: true })

    }
    travelingCard() {
        const t = ['adult', 'child', 'infant']
        var elem = []

        var tot = this.state.totP
        var count = 0



        t.forEach(e => {

            for (var x = 0; x < this.state.reqParams[e]; x++) {
                let id = e + x

                elem.push(
                    <Card.Body className={count === 0 ? 'padding2' : 'padding1'}>
                        <Card.Title>
                            <h6><b>Traveler {count + 1}: {e.charAt(0).toUpperCase() + e.slice(1)} </b></h6>
                        </Card.Title>

                        {count === 0 && <p style={{ fontSize: '15px' }}>Traveler names must match government-issued photo ID exactly.</p>}

                        <Form.Row className="fo">

                            <Col md>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={this.state.travelers[id].name} onChange={this.setTravS} name={id + '_name'} required type="text" minLength="2" maxLength="20" />
                            </Col>



                            <Col md>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={this.state.travelers[id].lastName} onChange={this.setTravS} name={id + '_lastName'} required type="text" minLength="2" maxLength="20" />
                            </Col>

                        </Form.Row>

                        <Form.Label>Gender</Form.Label>
                        <Form.Group>
                            <Form.Check required inline onChange={this.setTravS} name={id + '_gender'} type="radio" value='male' label='Male' checked={this.state.travelers[id].gender === 'male'} />
                            <Form.Check inline onChange={this.setTravS} name={id + '_gender'} type="radio" value='female' label='Female' checked={this.state.travelers[id].gender === 'female'} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Row>

                                <Col sm={5}>
                                    <Form.Control value={this.state.travelers[id].dob} type="date" onChange={this.setTravS} name={id + '_dob'} required />
                                </Col>
                            </Form.Row>
                        </Form.Group>







                        {count === tot - 1 &&
                            <div>
                                <hr></hr>
                                <p><b>Seat selection</b></p>
                                <p style={{ fontSize: '15px' }}>Your specific seat will be assigned by the airline before your flight.</p>
                            </div>}
                        {count++ !== tot - 1 && <hr></hr>}
                    </Card.Body>
                )
            }
        })

        return (elem)
    }
    async sendData(){
        let test={
            ...this.state.reqParams,
            ...this.state.discountRate,
            ...this.state.promo,
            ...this.state.flightIDB,
            travelers:this.state.travelers,
            payment:this.state.payment,
            customer:this.state.customer


        }
        this.setState({running:true})
        let resu
        try{
             resu=await axios.post('http://localhost:7000/checkout',{
                ...this.state.reqParams,
                discountRate:this.state.discountRate,
                promo:this.state.promo,
                flightIDB:this.state.flightIDB,
                travelers:this.state.travelers,
                payment:this.state.payment,
                customer:this.state.customer
                


            })
            this.setState({returned:true,results:resu.data,running:false})
            console.log(resu)
        }
        catch(e){
            this.setErr()
        }
        
            
        
    }
    render() {
        return (
            <>{this.state.isErr && <Redirect to={{ pathName: '/home' }} />}

                {this.state.render &&
                    <div>




                        <div className='container'>
                            <h4>Secure booking - only takes a few minutes!</h4>

                            <Alert variant='primary'>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                                    <path fillRule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                        Prices not guaranteed until booked
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                        Free cancellation!
                    </Alert>
                            <div className='ranBut'>
                                <Button onClick={this.randInput} variant="primary">Fill With Random Values</Button></div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Promotions
                                <svg style={{ marginLeft: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                        </svg>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Form.Group>
                                                        <InputGroup style={{ marginTop: '10px' }}>
                                                            <Form.Control className='col-lg-4' disabled={this.state.promoApplied} onChange={(e) => { this.setState({ promo: e.target.value }) }} value={this.state.promo} size="lg" type="text" placeholder="Promo Code" />
                                                            <InputGroup.Append>
                                                                <Button disabled={this.state.promoApplied} onClick={(e) => { this.getPromos(this.state.promo) }} variant="dark">Apply</Button>{' '}
                                                            </InputGroup.Append>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <p><b>Price summary</b><br />
                                                        {this.getPrices()}</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

                                <Card className='card'>
                                    <Card.Header>
                                        <span>
                                            <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                            </svg>
                                            <h4 style={{ display: "inline" }}>Who's traveling?</h4>
                                        </span>
                                    </Card.Header>

                                    {this.travelingCard()}
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <span>
                                            <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
                                            </svg>
                                            <h4 style={{ display: "inline" }}>Contact info</h4>
                                        </span>
                                    </Card.Header>

                                    <Card.Body>

                                        <Form.Row>
                                            <Form.Group className='col-lg-5' controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control value={this.state.customer.email} name='customer_email' maxLength='25' onChange={this.setInput} required type="email" placeholder="name@example.com" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>


                                            <Form.Group className='col-lg-5' controlId="formGridAddress1">
                                                <Form.Label>Phone number</Form.Label>
                                                <Form.Control value={this.state.customer.phoneNumber} name="customer_phoneNumber" onChange={this.setInput} pattern="\d+" minLength='10' maxLength='10' required className='col-lg-12' placeholder="1234567890" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group id="formGridCheckbox">
                                            <Form.Check className='label' type="checkbox" label="Receive text alerts about this trip. Message and data rates may apply" />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>

                                <Card className='card'>
                                    <Card.Header>
                                        <span>
                                            <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="2em" viewBox="0 0 16 16" className="bi bi-credit-card-2-back" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                                                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zM1 9h14v2H1V9z" />
                                            </svg>
                                            <h4 style={{ display: "inline" }}>How would you like to pay?</h4>
                                        </span>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>
                                            <h6>Primary Contact Name</h6>
                                        </Card.Title>

                                        <Form.Row>
                                            <Form.Group className='col-lg-5' as={Col}>

                                                <Form.Control
                                                    required
                                                    type="text"
                                                    minLength='2' maxLength='20'
                                                    name='customer_name'
                                                    value={this.state.customer.name}
                                                    onChange={this.setInput}

                                                />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group className='col-lg-4' as={Col}>
                                                <Form.Label>Debit/Credit card number</Form.Label>
                                                <Form.Control
                                                    required
                                                    pattern="\d+"
                                                    type="text"
                                                    name='payment_cardNo'
                                                    value={this.state.payment.cardNo}
                                                    onChange={this.setInput}
                                                    minLength="15" maxLength="19"
                                                />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Label>Expiration date</Form.Label>
                                        <Form.Row>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control value={this.state.payment.expMon} name="payment_expMon" onChange={this.setInput} custom required as="select">
                                                    <option value=''>Month</option>
                                                    <option value='1'>01-Jan</option>
                                                    <option value='2'>02-Feb</option>
                                                    <option value='3'>03-Mar</option>
                                                    <option value='4'>04-Apr</option>
                                                    <option value='5'>05-May</option>
                                                    <option value='6'>06-Jun</option>
                                                    <option value='7'>07-Jul</option>
                                                    <option value='8'>08-Aug</option>
                                                    <option value='9'>09-Sep</option>
                                                    <option value='10'>10-Oct</option>
                                                    <option value='11'>11-Nov</option>
                                                    <option value='12'>12-Dec</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group style={{ marginLeft: '8px' }}>
                                                <Form.Control custom value={this.state.payment.expYr} name="payment_expYr" onChange={this.setInput} required as="select">
                                                    <option value=''>Year</option>
                                                    <option value='2020'>2020</option>
                                                    <option value='2021'>2021</option>
                                                    <option value='2022'>2022</option>
                                                    <option value='2023'>2023</option>
                                                    <option value='2024'>2024</option>
                                                    <option value='2025'>2025</option>
                                                    <option value='2026'>2026</option>
                                                    <option value='2027'>2027</option>
                                                    <option value='2028'>2028</option>
                                                    <option value='2029'>2029</option>
                                                    <option value='2030'>2030</option>
                                                    <option value='2031'>2031</option>
                                                    <option value='2032'>2032</option>
                                                    <option value='2033'>2033</option>
                                                    <option value='2034'>2034</option>
                                                    <option value='2035'>2035</option>
                                                    <option value='2036'>2036</option>
                                                    <option value='2037'>2037</option>
                                                    <option value='2038'>2038</option>
                                                    <option value='2039'>2039</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Security code</Form.Label>
                                                <Form.Control value={this.state.payment.secCode} name="payment_secCode" onChange={this.setInput} className='col-md-1'
                                                    required
                                                    type="text"
                                                    pattern="\d+"
                                                    minLength="3" maxLength="3"
                                                />
                                            </Form.Group>
                                        </Form.Row>

                                        <hr></hr>




                                        <Form.Group controlId="formGridAddress3">
                                            <Form.Label>Billing address</Form.Label>
                                            <Form.Control value={this.state.payment.address} name="payment_address" onChange={this.setInput} required className='col-lg-6' placeholder="123 Main St" />
                                        </Form.Group>



                                        <Form.Row>
                                            <Form.Group className='col-lg-3' as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control name="payment_city" value={this.state.payment.city} onChange={this.setInput} minLength='2' maxLength='20' required />
                                            </Form.Group>

                                            <Form.Group className='col-sm-2' as={Col} controlId="formGridState">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control name="payment_state" onChange={this.setInput} as="select" value={this.state.payment.state} custom>
                                                    <option value="">Select</option>
                                                    <option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FL">FL</option><option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option><option value="AS">AS</option><option value="FM">FM</option><option value="GU">GU</option><option value="MH">MH</option><option value="MP">MP</option><option value="PW">PW</option><option value="PR">PR</option><option value="VI">VI</option><option value="AA">AA</option><option value="AE">AE</option><option value="AP">AP</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group className='col-sm-2' as={Col} controlId="formGridZip">
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control value={this.state.payment.zip} name="payment_zip" onChange={this.setInput} minLength='5' maxLength='5' required pattern="\d+" />
                                            </Form.Group>
                                        </Form.Row>



                                    </Card.Body>
                                </Card>

                                <Row>
                                    <Col>
                                        <Card>
                                            <Card.Header>
                                                <span>
                                                    <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cursor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                                                    </svg>
                                                    <h4 style={{ display: "inline" }}>Flight info</h4>
                                                </span>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>{this.state.flightIDB === '' ? 'One way flight' : 'Round-Trip Flight'}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{this.getCountString()}  </Card.Subtitle>
                                                <hr />
                                                <p>{this.getFlightInfo()}</p>

                                                <hr />
                                                <b>Your price summary</b>
                                                <p>{this.getPrices()}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ marginBottom: '10px' }} className='card'>
                                            <Card.Header>
                                                <span>
                                                    <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                        <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                    <h4 style={{ display: "inline" }}>Review and book your trip</h4>
                                                </span>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>
                                                    <h6>Please Read!</h6>
                                                </Card.Title>

                                                <ol>
                                                    <li key={'li1'}>Review your trip details to make sure the dates and times are correct.</li>
                                                    <li key={'li2'}>Check your spelling. Flight passenger names must match government-issued photo ID exactly.</li>
                                                    <li key={'li3'}>
                                                        Review the terms of your booking:
                                        <ul>
                                                            <li key={'li4'}>Airline assigns seats</li>
                                                            <li key={'li5'}>Bring a carry-on bag</li>
                                                            <li key={'li6'}>Pay to bring a checked bag</li>
                                                            <li key={'li7'}>To reschedule your flight, cancel your current one and book a new one again</li>
                                                        </ul>
                                                    </li>
                                                </ol>
                                                <p>By selecting to complete this booking, I acknowledge that I have read and accept the above Rules & Restrictions.</p>
                                                <BookingModal return={this.state.returned} result={this.state.results} run={this.state.running}/>
                                                <div className='message'>
                                                    <svg style={{ marginBottom: '5px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                                                    </svg>
                                                    <p style={{ fontSize: '14px', display: "inline" }}>We use secure transmission and encrypted storage to protect your personal information.</p>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                            </Form>
                        </div>

                    </div>}
            </>
        )
    }
}

export default Booking