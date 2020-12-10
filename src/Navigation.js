
import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="./">
                    <img
                        alt=""
                        src="favicon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      Flights
    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="./">Book</Nav.Link>
                        <Nav.Link href="/myflights">My Flights</Nav.Link>
                        <Nav.Link href="/checkin">Check-in</Nav.Link>
                        <Nav.Link href="/board">Board</Nav.Link>
                        <Nav.Link href="/erd">ERD</Nav.Link>
                        <Nav.Link href="/erd">Queries</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
    }
} export default Navigation