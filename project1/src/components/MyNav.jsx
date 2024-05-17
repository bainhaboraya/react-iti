import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export function MyNav() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" expand="lg" className="shadow-sm">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold">BookStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
                            <Nav.Link href="#features" className="text-dark">Features</Nav.Link>
                            <Nav.Link href="#pricing" className="text-dark">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
