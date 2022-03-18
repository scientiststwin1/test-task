import React from 'react';
import ChainIcon from '../../atoms/icons/chainIcon';
import Image from '../../atoms/image';

const ImageBox = () => {
  return (
    <div className="relative border-2 border-red-800 w-80 h-52 m-12 hover: " >

        <Image src={require('../../../assest/images/container_5.jpg')} className="w-full h-full block object-conver " />

        <div className='w-24 h-24 absolute top-1/2 left-1/2 flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full '>
          <ChainIcon className="fill-white w-11" />
        </div>

    </div>
  )
}

export default ImageBox;