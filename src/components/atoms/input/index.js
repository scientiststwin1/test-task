import React from 'react';
import PropTypes from 'prop-types'

const Input = (props) => {

  const { type } = props;

  return (
    <input type={type} />
  )
}

Input.prototype = {
    type: PropTypes.string,
}

export default Input;