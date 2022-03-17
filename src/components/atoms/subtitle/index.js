import React from 'react';
import PropTypes from 'prop-types'

const Subtitle = (props) => {

  const { childer } = props;

  return (
    <h2>{childer}</h2>
  )
}

Subtitle.prototype = {
    childer: PropTypes.element,
    
}

export default Subtitle;