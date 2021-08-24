import { Component } from 'react';
import Image from 'react-bootstrap/Image'

class Welcome extends Component {

    render() {

        return (
            <div>
                <img src="./Assets/books-image.jpeg" width="100vw" height='100vh' alt="" />
                <Image src="./Assets/books-image.jpeg" fluid />
                <h1>
                    WELCOME
                </h1>
                <h3>Books is Knowledge</h3>
            </div>
        )
    }
}

export default Welcome;