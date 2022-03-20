import React from 'react';
import Image from '../../atoms/image';

const Phone = () => {
  return (
    <div className='relative' >
        <Image className='absolute top-2 left-14 z-10' src={require('../../../assest/images/phone/camera_1.png')} alt="phone_camera" />
        <Image className='absolute top-6 left-11 z-10' src={require('../../../assest/images/phone/speaker.png')} alt="phone_speaker" />
        <Image className='absolute top-0 left-0' src={require('../../../assest/images/phone/frame_0.png')} alt="phone_frame" />
        <Image className='absolute top-10 left-2.5' src={require('../../../assest/images/phone/screen_1.png')} alt="phone_screen" />
        <Image className='absolute top-56 left-12 z-10' src={require('../../../assest/images/phone/button_0.png')} alt="phone_button" />
    </div>
  )
}

export default Phone;