import React from 'react';
// import './Search.css';
import { Nav, Navbar, Form, Row, Col, Button, Carousel, Card, ListGroup } from 'react-bootstrap';

class Summary extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: '25%' }}>
                    <Card.Body>
                        <Card.Title>One way flight</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">2 tickets: 2 adults </Card.Subtitle>
                        <hr />
                        <b>Houston (IAH) to Buffalo (BUF)</b>
                        <p>Tuesday, Dec 12 <br /> 6:23am - 1:01pm (5h 38m) <br />1h 30m stop in CLT</p>

                        <hr />
                        <b>Your price summary</b>
                        <p>Traveler 1: $314.20 <br /> Traveler 2: $314.20</p>
                        <Button href='#' variant="success">Complete check-in</Button>{' '}
                    </Card.Body>
                </Card>

            </div >
        )
    }
}

export default Summary