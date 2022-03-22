import React from 'react';
import PropTypes from 'prop-types';

const YoutubeModal = props => {

    const { onClose, videoId } = props;

    return (
        <section className='fixed inset-0 w-full h-full z-50 ' >
            <div className='w-screen h-screen bg-black opacity-80'></div>
            <div className='absolute inset-0 flex justify-center items-center ' >
                <div className='flex flex-col' >
                    <span className='text-white self-end cursor-pointer' onClick={onClose} >&#x2715;</span>
                    <iframe
                        className='z-50'
                        loading="lazy"
                        width="500"
                        height="300"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        autoPlay
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

YoutubeModal.prototype = {
    onClose: PropTypes.func,
    videoId: PropTypes.string,
}

export default YoutubeModal;