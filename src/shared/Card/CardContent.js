import React from 'react';
import PropTypes from 'prop-types'

const CardContent = ({ imageUrl }) => {
    return <img src={imageUrl} alt={imageUrl} />
}

CardContent.propTypes = {
    imageUrl: PropTypes.string,
}

export default CardContent;