import React from 'react';
import ChainIcon from '../../atoms/icons/chainIcon';
import Image from '../../atoms/image';
import PropTypes from 'prop-types';

const ImageBox = props => {

  const { src, alt } = props;

  return (
    <div className="relative group w-full h-52 2xl:h-80 hover:cursor-pointer" >

        <Image src={src} alt={alt} className="w-full h-full block object-conver " />

        <div className='w-20 h-20 absolute hidden top-1/2 left-1/2 group-hover:flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full '>
          <ChainIcon className="fill-white w-10" />
        </div>

    </div>
  )
}

ImageBox.prototype = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default ImageBox;