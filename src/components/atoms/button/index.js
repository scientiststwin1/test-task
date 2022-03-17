import React, { Children } from 'react';
import PropTypes from 'prop-types'

const Button = (props) => {

  const { onClick, type, Children } = props

  return (
    <button type={type} onClick={onClick} >
        {Children}
    </button>
  )
}

Button.prototype = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    Children: PropTypes.element,

}

export default Button;