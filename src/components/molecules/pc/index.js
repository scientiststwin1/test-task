import React from 'react';
import Image from '../../atoms/image';

const Pc = props => {

  const { className } = props;


  return (
    <div className={className} >
        <Image className='absolute top-3 left-[15rem] z-10' src={require('../../../assest/images/pc/camera.png')} alt='pc_camera' />
        <Image className='absolute top-0 left-0' src={require('../../../assest/images/pc/case.png')} alt='pc_case' />
        <Image className='absolute top-7 left-6' src={require('../../../assest/images/pc/screen.png')} alt='pc_screen' />
        <Image className='absolute top-[20.7rem] left-48' src={require('../../../assest/images/pc/indent.png')} alt='pc_indent' />

    </div>
  )
}

export default Pc