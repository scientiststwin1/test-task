import classnames from 'classnames';
import React from 'react'

const ServiceBox = (props) => {

  const { icon, text } = props;

  const combineClassNames = classnames(
    'flex flex-col items-center justify-center py-20 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer',
    'space-y-4'
  )

  return (
    <div className={combineClassNames}>
      { icon }
      <h3>{text}</h3>
    </div>
  )
}

export default ServiceBox;