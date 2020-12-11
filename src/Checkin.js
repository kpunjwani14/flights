import React from 'react';
import './Checkin.css';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import './Example'
import Example from './Example';
import axios from 'axios'
import BoardingPass from './BoardingPass'

class Checkin extends React.Component {
    constructor() {
        super()
        this.state = {
            flightID: '',
            ticketNo: '',
            validated: false,
            isValid: true,
            run: false,
            suc: false,
            dept_air: '',
            arr_air: '',
            date:''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    getDate(t) {
        return (t.toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }))+' '+this.getTime(t)
    }
    getTime(time) {
        return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
    async getTicket() {
        this.setState({ run: true })
        try {
            const x = await axios.post('http://localhost:7000/checkin', {
                flightID: this.state.flightID,
                ticketNo: this.state.ticketNo
            })
            
            if (x.data.found)
                this.setState({ date:this.getDate(new Date(x.data.data.scheduled_departure)),suc: true, dept_air: x.data.data.departure_airport, arr_air: x.data.data.arrival_airport })
            else
               throw(new Error('No match'))
        }
        catch (e) {
           
            this.setState({ run: false })
        }
    }
    handleSubmit(event) {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

            event.stopPropagation();
        }
        else {
            this.setState({ isValid: true })
            this.getTicket()
        }

        event.preventDefault()
        this.setState({ validated: true })

    }

    render() {
        return (
            <div>
                {this.state.suc && <BoardingPass data={{date:this.state.date,depart:this.state.dept_air,arr:this.state.arr_air,flightID:this.state.flightID,ticketNo:this.state.ticketNo}} />}
                {!this.state.suc && <div class='content'>
                    <h1>Check-in</h1>
                    <Card style={{ width: '90%' }}>
                        <Card.Img style={{ height: '20rem' }} variant="top" src="https://images.unsplash.com/photo-1522153588464-5dba4c1983c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
                        <Card.Body>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Check-in is available starting 24 hours before your scheduled departure.
      </Card.Text>
                            <Form noValidate validated={false} onSubmit={this.handleSubmit}>
                                <Form.Row>
                                    <Form.Group className='col-md-4' as={Col} controlId="formGridEmail">
                                        <Form.Label>Ticket Number</Form.Label>
                                        <Form.Control disabled={this.state.run} value={this.state.ticketNo} onChange={e => { this.setState({ ticketNo: e.target.value }) }} pattern="\d+" required type="text" />
                                    </Form.Group>


                                    <Form.Group className='col-md-4' as={Col} controlId="formGridPassword">
                                        <Form.Label>Flight ID</Form.Label>
                                        <Form.Control disabled={this.state.run} value={this.state.flightID} onChange={e => { this.setState({ flightID: e.target.value }) }} required type="text" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Example on={this.state.run}  />
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Card.Body>
                    </Card>

                </div>}
            </div >
        )
    }
}

export default Checkin