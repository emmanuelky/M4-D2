import { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

class BookNavbar extends Component {

    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Browse</Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">About</Nav.Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default BookNavbar;