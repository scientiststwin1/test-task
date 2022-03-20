import React from 'react'
import Image from '../../atoms/image';

const Tablet = props => {

  const { className } = props;

  return (
    <div className={className} >
        <Image className="absolute top-4 left-36 z-10" src={require('../../../assest/images/tablet/camera_0.png')} />
        <Image className="absolute inset-0" src={require('../../../assest/images/tablet/frame.png')} />
        <Image className="absolute top-10 left-8" src={require('../../../assest/images/tablet/screen_0.png')} />
        <Image className="absolute top-[27rem] left-36 z-10" src={require('../../../assest/images/tablet/button.png')} />
    </div>
  )
}

export default Tablet; 