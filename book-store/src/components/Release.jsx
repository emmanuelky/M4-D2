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
                    <Card key={book.asin} style={{ width: '18rem' }} className='mt-5 m-3'>
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
            </div>
        )
    }
}
export default Release;