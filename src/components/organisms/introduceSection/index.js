import React from 'react'
import PlayIcon from '../../atoms/icons/playIcon';
import Subtitle from '../../atoms/subtitle';
import Text from '../../atoms/text';

const IntroduceSection = () => {
    return (
        <div className=' bg-gray-200 py-10 box-content w-full h-52'>

            <div className='w-[75%] m-auto h-full grid grid-cols-[1fr_1.5fr] gap-x-5' >

                <div className='bg-orange-400 flex justify-center items-center' >
                    <PlayIcon className="w-20 fill-stone-200" />
                </div>
                <div className='w-full' >
                    <Subtitle className="text-main-gray" >GET TO KNOW US A LITTLE BETTER!</Subtitle>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
                    <br />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </div>

            </div>
        </div>
    )
}

export default IntroduceSection;