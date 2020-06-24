import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../../shared/Header';
import Container from '../../shared/Container'
import FloatingIcon from '../../shared/FloatingIcon'

import './Create.css'

class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            imageUrl: '',
        };
    }

    // handleOnUpdateField = (value, field) => {
    //     this.setState({
    //         [field]: value,
    //     })
    // }

    handleOnUpdateAuthor = (value, field) => {
        this.setState({
            author: value,
        })
    }

    handleOnUpdateImageUrl = (value, field) => {
        this.setState({
            imageUrl: value,
        })
    }

    handleOnSave = () => {
        this.props.onCreate(this.state);
    };

    render() {
        return <div>
            <Header title="Sharebook" />
            <Link to="/create">
                <FloatingIcon icon="x"  />
            </Link>
            <Container>
                <div className="form">
                    <h1>Create a new book</h1>
                    <input placeholder="Add the author of the book" 
                    onChange={(event) => {
                        this.handleOnUpdateAuthor(event.target.value)
                    } } />
                    <input 
                    placeholder="Add the image url of the book" 
                    onChange={(event) => {
                        this.handleOnUpdateImageUrl(event.target.value);
                    }} />
                    <Link to="/" >
                    <button onClick={this.handleOnSave}>Create</button>
                    </Link>
                </div>
            </Container>
        </div>
    }
}

export default Create;