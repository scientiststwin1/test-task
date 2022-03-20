import React from 'react';
import PropTypes from 'prop-types'

const Title = props => {

  const { className, childern } = props;

  return (
    <h1 className={className}> {childern} </h1>
  )
}

Title.prototype = {
  childern: PropTypes.element,
  className: PropTypes.string
}

export default Title;