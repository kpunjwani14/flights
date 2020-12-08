import React from 'react';
import './Checkin.css';
import { Form, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { useState } from "react";

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="row justify-content-center">
                <Button variant="primary" onClick={handleShow}>
                    Search flights
        </Button>
            </div>

            <Modal show={show} backdrop="static" onHide={handleClose} keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Flight summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Title>One way flight</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">2 tickets: 2 adults </Card.Subtitle>
                    <hr />
                    <b>Houston (IAH) to Buffalo (BUF)</b>
                    <p>Tuesday, Dec 12 <br /> 6:23am - 1:01pm (5h 38m) <br />1h 30m stop in CLT</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="success" onClick={handleClose}>
                        Complete check-in
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example