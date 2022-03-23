import React from 'react'
import ImageBox from '../../molecules/imageBox';
import PropTypes from 'prop-types';

const sampleWorks = [
    {
        id: 1,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'print',
    },
    {
        id: 2,
        image: require('../../../assest/images/container_5.jpg'),
        type: 'photography',
    },
    {
        id: 3,
        image: require('../../../assest/images/container_6.jpg'),
        type: 'web',
    },
    {
        id: 4,
        image: require('../../../assest/images/container_8.jpg'),
        type: 'application',
    },
    {
        id: 5,
        image: require('../../../assest/images/container_9.jpg'),
        type: 'print',
    },
    {
        id: 6,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'photography',
    },
    {
        id: 7,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'web',
    },
    {
        id: 8,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'application',
    },
    {
        id: 9,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'print',
    },
    {
        id: 10,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'photography',
    },
    {
        id: 11,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'web',
    },
    {
        id: 12,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'application',
    },
    {
        id: 13,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'print',
    },
    {
        id: 14,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'photography',
    },
    {
        id: 15,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'web',
    },
    {
        id: 16,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'application',
    },
    {
        id: 17,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'print',
    },
    {
        id: 18,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'photography',
    },
    {
        id: 19,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'web',
    },
    {
        id: 20,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'application',
    },
    {
        id: 21,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'print',
    },
    {
        id: 22,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'photography',
    },
    {
        id: 23,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'web',
    },
    {
        id: 24,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'application',
    },
    {
        id: 25,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'print',
    },
    {
        id: 26,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'photography',
    },
    {
        id: 27,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'web',
    },
    {
        id: 28,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'application',
    },
    {
        id: 29,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'print',
    },
    {
        id: 30,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'print',
    },
]
const WorkSamples = props => {

    const { layout, items } = props;

    const gridCol = layout === 'grid' ? 'grid-cols-3' : 'grid-cols-1';
    console.log(gridCol)

    return (
        <div className={`grid grid-cols-3 gap-x-3 gap-y-3`}>
            {
                sampleWorks.map(sampleWork => {
                    return (<ImageBox src={sampleWork.image} />)
                })
            }
            {/* <ImageBox src={require('../../../assest/images/container_4.jpg')} />
            <ImageBox src={require('../../../assest/images/container_5.jpg')} />
            <ImageBox src={require('../../../assest/images/container_6.jpg')} />
            <ImageBox src={require('../../../assest/images/container_8.jpg')} />
            <ImageBox src={require('../../../assest/images/container_9.jpg')} />
            <ImageBox src={require('../../../assest/images/container_4.jpg')} />
            <ImageBox src={require('../../../assest/images/container_5.jpg')} />
            <ImageBox src={require('../../../assest/images/container_6.jpg')} />
            <ImageBox src={require('../../../assest/images/container_8.jpg')} /> */}
        </div>
    )
}

WorkSamples.prototype = {
    layout: PropTypes.oneOf(['grid', 'list']),
    items: PropTypes.array,
}

export default WorkSamples;