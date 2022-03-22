import React, { useState } from 'react'
import PlayIcon from '../../atoms/icons/playIcon';
import Subtitle from '../../atoms/subtitle';
import Text from '../../atoms/text';
import YoutubeModal from '../../molecules/youtubeModal';

const IntroduceSection = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className=' bg-gray-200 py-10 box-content w-full '>

            <div className='w-[75%] m-auto grid grid-cols-1 grid-rows-[0.5fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_1.5fr] gap-y-5 md:gap-y-0 md:gap-x-5' >

                <div onClick={setIsOpen.bind(this, true)} className='bg-orange-400 flex justify-center items-center hover:cursor-pointer' >
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
            {isOpen && <YoutubeModal videoId='4UZrsTqkcW4' onClose={setIsOpen.bind(this, false)} />  }
        </section>

    )
}

export default IntroduceSection;