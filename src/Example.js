import React from 'react';
import './Checkin.css';
import { Button, Card, Modal } from 'react-bootstrap';
import { useState } from "react";
import { Redirect } from 'react-router-dom';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [red, setRed] = useState(false)
    const handleClick = () => {
        setRed(true)
    }

    return (
        <>
            {red && <Redirect to='./boardingpass' />}
            <div class="row justify-content-center">
                <Button variant="primary" onClick={handleShow}>
                    Search flights
        </Button>
            </div>

            <Modal show={show} backdrop="static" onHide={handleClose} keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Flight summary</Modal.Title>
                </Modal.Header>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="success" onClick={handleClick}>
                        Complete check-in
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example