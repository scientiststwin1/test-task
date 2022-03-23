import { useState } from 'react'
import ImageBox from '../../molecules/imageBox';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

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
        image: require('../../../assest/images/container_5.jpg'),
        type: 'web',
    },
    {
        id: 8,
        image: require('../../../assest/images/container_6.jpg'),
        type: 'application',
    },
    {
        id: 9,
        image: require('../../../assest/images/container_8.jpg'),
        type: 'print',
    },
    {
        id: 10,
        image: require('../../../assest/images/container_9.jpg'),
        type: 'photography',
    },
    {
        id: 11,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'web',
    },
    {
        id: 12,
        image: require('../../../assest/images/container_5.jpg'),
        type: 'application',
    },
    {
        id: 13,
        image: require('../../../assest/images/container_6.jpg'),
        type: 'print',
    },
    {
        id: 14,
        image: require('../../../assest/images/container_8.jpg'),
        type: 'photography',
    },
    {
        id: 15,
        image: require('../../../assest/images/container_9.jpg'),
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
        image: require('../../../assest/images/container_5.jpg'),
        type: 'photography',
    },
    {
        id: 19,
        image: require('../../../assest/images/container_6.jpg'),
        type: 'web',
    },
    {
        id: 20,
        image: require('../../../assest/images/container_8.jpg'),
        type: 'application',
    },
    {
        id: 21,
        image: require('../../../assest/images/container_9.jpg'),
        type: 'print',
    },
    {
        id: 22,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'photography',
    },
    {
        id: 23,
        image: require('../../../assest/images/container_5.jpg'),
        type: 'web',
    },
    {
        id: 24,
        image: require('../../../assest/images/container_6.jpg'),
        type: 'application',
    },
    {
        id: 25,
        image: require('../../../assest/images/container_8.jpg'),
        type: 'print',
    },
    {
        id: 26,
        image: require('../../../assest/images/container_9.jpg'),
        type: 'photography',
    },
    {
        id: 27,
        image: require('../../../assest/images/container_4.jpg'),
        type: 'web',
    },
    {
        id: 28,
        image: require('../../../assest/images/container_5.jpg'),
        type: 'application',
    },
    {
        id: 29,
        image: require('../../../assest/images/container_6.jpg'),
        type: 'print',
    },
    {
        id: 30,
        image: require('../../../assest/images/container_8.jpg'),
        type: 'print',
    },
]
const WorkSamples = props => {
    const { layout } = props;

    const [sample, setSample] = useState(sampleWorks.slice(0, 6))
    const [hasMore, setHasMore] = useState(true)

    const gridCol = layout === 'grid' ? 'grid-cols-3' : 'grid-cols-1';

    const loadMore = page => {
        if (page * 6 < sampleWorks.length)
            setTimeout(() => {
                setSample(sampleWorks.slice(0, 6 * page))
            }, 1000); // ? just for show loading
        else setHasMore(false)
    }

    return (
        <div>

            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
                className={`w-full grid grid-cols-1 md:${gridCol} gap-x-3 gap-y-3`}
            >

                {
                    sample.map(sampleWork => {
                        return (<ImageBox key={sampleWork.id} src={sampleWork.image} />)
                    })
                }

            </InfiniteScroll>
        </div>
    )
}

WorkSamples.prototype = {
    layout: PropTypes.oneOf(['grid', 'list']),
    items: PropTypes.array,
}

export default WorkSamples;