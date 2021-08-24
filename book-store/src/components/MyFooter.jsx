import { Component } from 'react';
import { Card } from 'react-bootstrap'

class MyFooter extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Link href="#">Imprint</Card.Link>
                    <Card.Link href="#">Data Protection</Card.Link>
                    <Card.Link href="#">Privacy</Card.Link>
                    <Card.Link href="#">Features</Card.Link>
                    <Card.Link href="#">Services</Card.Link>
                    <Card.Link href="#">Contact</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}
export default MyFooter;