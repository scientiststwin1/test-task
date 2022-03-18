import React from 'react';
import PropTypes from 'prop-types'

const Image = (props) => {

    const { src, alt, className } = props

    return (
        <img src={src} alt={alt} className={className} />
    )
}

Image.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}

export default Image;