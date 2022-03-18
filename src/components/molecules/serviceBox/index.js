import classnames from 'classnames';
import React from 'react'

const ServiceBox = (props) => {

  const { text } = props;

  const combineClassNames = classnames(
    'flex justify-center py-20 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer'
  )

  return (
    <div className={combineClassNames}>

      <h3>{text}</h3>
    </div>
  )
}

export default ServiceBox;