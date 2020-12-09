import React from 'react';
import { Image, Card } from 'react-bootstrap'
import erd from './ERD.jpeg';

class Erd extends React.Component {
    render() {
        return (
            <div >
                <h1 style={{ paddingTop: '10px' }}>ER Diagram</h1>
                <Image style={{ paddingTop: '20px' }} className='mx-auto d-block' src={erd} rounded width='90%' />
            </div>

        );
    }



}

export default Erd