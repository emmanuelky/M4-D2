import books from '../data/scifi.json'
import { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

class Release extends Component {

    state = {
        book: null
    }
    render() {
        return (
            <div className='d-flex flex-wrap'>
                {books.map(book => (
                    <Card style={{ width: '18rem' }} className='mt-5'>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                Category: {book.category}
                            </Card.Text>
                            <Button variant="primary">{book.price}</Button>
                        </Card.Body>
                    </Card>
                ))}
                <Card style={{ width: '18rem' }} className='mt-5'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Release;