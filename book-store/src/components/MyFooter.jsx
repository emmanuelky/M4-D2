import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class MyFooter extends Component {
    render() {
        return (
            <Navbar fixed="bottom">

                <Nav.Link href="#">Imprint</Nav.Link>
                <Nav.Link href="#">Data Protection</Nav.Link>
                <Nav.Link href="#">Privacy</Nav.Link>
                <Nav.Link href="#">Features</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>

            </Navbar>
        )
    }
}
export default MyFooter;