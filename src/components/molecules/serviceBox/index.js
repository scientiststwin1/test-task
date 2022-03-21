import classnames from 'classnames';
import React from 'react'

const ServiceBox = (props) => {

  const { icon, text, onClick } = props;

  const combineClassNames = classnames(
    'flex flex-col items-center justify-center py-14 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer',
    'space-y-4 font-bold text-main-gray hover:text-black fill-main-gray hover:fill-black'
  )

  return (
    <div className={combineClassNames} onClick={onClick} >
      { icon }
      <h3>{text}</h3>
    </div>
  )
}

export default ServiceBox;