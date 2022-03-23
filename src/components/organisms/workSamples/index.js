import React from 'react'
import ImageBox from '../../molecules/imageBox';

const WorkSamples = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3'>
            <ImageBox src={require('../../../assest/images/container_4.jpg')} />
            <ImageBox src={require('../../../assest/images/container_5.jpg')} />
            <ImageBox src={require('../../../assest/images/container_6.jpg')} />
            <ImageBox src={require('../../../assest/images/container_8.jpg')} />
            <ImageBox src={require('../../../assest/images/container_9.jpg')} />
            <ImageBox src={require('../../../assest/images/container_4.jpg')} />
            <ImageBox src={require('../../../assest/images/container_5.jpg')} />
            <ImageBox src={require('../../../assest/images/container_6.jpg')} />
            <ImageBox src={require('../../../assest/images/container_8.jpg')} />
        </div>
    )
}

export default WorkSamples;