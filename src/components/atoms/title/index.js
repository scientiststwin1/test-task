import React from 'react';
import PropTypes from 'prop-types'

const Title = (props) => {

  const { childern } = props;

  return (
    <h1>{childern}</h1>
  )
}

Title.prototype = {
  childern: PropTypes.element

}

export default Title;