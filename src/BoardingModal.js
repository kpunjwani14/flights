import React from 'react';
import './Checkin.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import { Redirect } from 'react-router-dom'

function BoardingModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [red, setRed] = useState(false)
    const handleClick = () => {
        setRed(true)
    }

    return (
        <>
            {red && <Redirect to='/' />}
            <div class="row justify-content-center">
                <Button variant="primary" onClick={() => setShow(true)}>
                    Board
        </Button>
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
                        You are about to board the plane! Remember to fasten your seat belts and keep your masks on at all times.
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

export default BoardingModal