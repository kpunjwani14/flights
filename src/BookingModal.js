import React from 'react';
import './Checkin.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import { Redirect } from 'react-router-dom'

function BookingModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [red, setRed] = useState(false)
    const handleClick = () => {
        setRed(true)
    }

    return (
        <>
            {red && <Redirect to='/' />}
            <div>
                <Button  type='submit' size="lg" variant="outline-success">Complete Booking
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Button>{' '}
            </div>

            <Modal
                centered
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton onHide={handleClick}>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Success!
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        You have successfully booked your flight.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClick}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BookingModal