import React, { useRef } from 'react'
import Subtitle from '../../atoms/subtitle';
import Text from '../../atoms/text';
import Slider from 'react-slick';
import ImageBox from '../../molecules/imageBox';
import ArrowLeftIcon from '../../atoms/icons/arrowLeftIcon';
import ArrowRightIcon from '../../atoms/icons/arrowRightIcon';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedSection = () => {

    const slider = useRef(null)

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "160px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className='py-10  ' >
            <div className='w-full text-center' >
                <Subtitle>A COUPLE OF OUR FEATURED PROJECTS</Subtitle>
                <Text className='w-11/12 md:w-1/2 m-auto my-4' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </div>
            <div className='py-10' >
                <Slider ref={slider} {...settings}>
                    <ImageBox className='px-2' src={require('../../../assest/images/container_4.jpg')} />
                    <ImageBox className='px-2' src={require('../../../assest/images/container_5.jpg')} />
                    <ImageBox className='px-2' src={require('../../../assest/images/container_6.jpg')} />
                    <ImageBox className='px-2' src={require('../../../assest/images/container_8.jpg')} />
                    <ImageBox className='px-2' src={require('../../../assest/images/container_9.jpg')} />
                </Slider>
            </div>
            <div className='w-11/12 md:w-1/2 m-auto flex' >
                <ArrowLeftIcon onClick={() => slider.current.slickPrev()} className='w-24 fill-main-gray hover:fill-main-green hover:cursor-pointer' />
                <div className='flex flex-col justify-center items-center space-y-5 ' >
                    <Subtitle>DARK UI KIT FREEBIE</Subtitle>
                    <Text className="text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                </div>
                <ArrowRightIcon onClick={() => slider.current.slickNext()} className='w-24 fill-main-gray hover:fill-main-green hover:cursor-pointer' />
            </div>
        </section>
    )
}

export default FeaturedSection;