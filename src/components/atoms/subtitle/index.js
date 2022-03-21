import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
const Subtitle = (props) => {

  const { children, className } = props;

  const combineClassNames =  classnames(
    'font-bold text-lg text-main-gray',
    className
    )

  return (
    <h2 className={combineClassNames} >{children}</h2>
  )
}

Subtitle.prototype = {
  children: PropTypes.element,
  className: PropTypes.string
}

export default Subtitle;