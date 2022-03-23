import React from 'react';
import PropTypes from 'prop-types'

const Title = props => {

  const { className, children } = props;

  return (
    <h1 className={className}> {children} </h1>
  )
}

Title.prototype = {
  childern: PropTypes.element,
  className: PropTypes.string
}

export default Title;