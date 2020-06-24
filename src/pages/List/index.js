import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Header from '../../shared/Header';
import Container from '../../shared/Container'
import FloatingIcon from '../../shared/FloatingIcon'
import Card from '../../shared/Card'

import './List.css'

const List = ({ shareBooks }) => {
    return (
        <div className="App">
            <Header title="Sharebook" />
            <Link to="/create">
                <FloatingIcon icon="+"  />
            </Link>
            <Container>
            <div>
                {shareBooks.length && 
                    shareBooks.map((book) => <Card key={book.author} imageUrl={book.imageUrl} author={book.author} />)}
            </div>
            </Container>
        </div>
    )
}

List.propTypes = {
    shareBooks: PropTypes.array,
}

export default List;