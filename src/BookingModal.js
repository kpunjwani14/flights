import React from 'react';
import './Checkin.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import { Redirect } from 'react-router-dom'
function getResults(data) {
    return (<>
        {data.waitList ? <p>We were unable to book your flight. You have been placed on a waitlist</p> : <>Success! You have reserved your flight<br/></>}
    Your booking reference is {data.book_ref}<br/>
        {!data.waitList && <><br/>Your Ticket Numbers are<br/> {data.tickets.map(m=>{
            return(<>{m}<br/></>)
        })
        }</>}
        <>Write this information down for flight lookup/checkin</>
    </>
    )
}
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
                <Button disabled={props.run} type='submit' size="lg" variant="outline-success">Complete Booking
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Button>{' '}
            </div>

            <Modal
                centered
                show={props.return}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton onHide={handleClick}>

                </Modal.Header>
                <Modal.Body>
                    {getResults(props.result)}
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