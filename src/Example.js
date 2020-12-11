import React from 'react';
import './Checkin.css';
import { Button, Card, Modal } from 'react-bootstrap';
import { useState } from "react";


function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const [red, setRed] = useState(false)
    const handleClick = () => {
        setRed(true)
    }

    return (
        <>
            
            <div class="row justify-content-center">
                <Button type='submit' disabled={props.on} variant="primary" >
                    Search flights
        </Button>
            </div>

           
        </>
    );
}

export default Example