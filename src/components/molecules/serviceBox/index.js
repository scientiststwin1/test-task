import classnames from 'classnames';
import React from 'react'

const ServiceBox = (props) => {

  const { icon, text, onClick, selected } = props;

  const combineClassNames = classnames(
    'flex flex-col items-center justify-center py-14 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer',
    'space-y-4 font-bold text-main-gray hover:text-slate-900 fill-main-gray hover:fill-slate-900',
    {
      "bg-gray-300 text-slate-700 fill-slate-700": selected
    }
  )

  return (
    <div className={combineClassNames} onClick={onClick} >
      {icon}
      <h3>{text}</h3>
    </div>
  )
}

export default ServiceBox;