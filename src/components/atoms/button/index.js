import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = (props) => {

  const { onClick, type, size, children, className, ...prop } = props;

  const styleSM = 'px-2.5 py-1.5 text-xs'
  const styleMD = 'px-4 py-2 text-sm'
  const styleLG = 'px-6 py-3 text-lg'

  const combineClassNames = classnames(
    'text-white font-bold border-none outline-none text-sm',
    {
      'bg-emerald-700 hover:bg-emerald-800': type === 'submit',
      'bg-red-600 hover:bg-red-700': type === 'delete',
    },
    {
      [styleSM]: size === 'sm',
      [styleMD]: size === 'md',
      [styleLG]: size === 'lg',
    },
    className)

  return (
    <button onClick={onClick} className={combineClassNames} >
      {children}
    </button>
  )
}

Button.prototype = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['submit', 'delete']),
  Children: PropTypes.element,
  className: PropTypes.string,
}

export default Button;