import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

const Input = (props) => {

  const { className, placeholder, type, ...prop } = props

  const combineClasses = Classnames(
    'outline-none border border-[2px] ',
    'border-gray-500 px-2 py-5 h-8',
    className,
  )

  return (
    <input type={type} className={combineClasses} placeholder={placeholder} {...prop} />
  )
}

Input.prototype = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input;