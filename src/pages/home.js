import React from 'react'
import ArrowLeftIcon from '../components/atoms/icons/arrowLeftIcon';
import ArrowRightIcon from '../components/atoms/icons/arrowRightIcon';
import Subtitle from '../components/atoms/subtitle';
import Text from '../components/atoms/text';

const Home = () => {
  return (
    <div>
      <div className=' bg-gray-200 py-10 box-content w-full h-52'>

        <div className='w-[75%] m-auto h-full grid grid-cols-[1fr_1.3fr]' >

          <div className='' >

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


        <div>
          <div className='w-full text-center' >
            <Subtitle>A COUPLE OF OUR FEATURED PROJECTS</Subtitle>
            <Text className='w-1/2 m-auto my-5' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </div>
          <div>

          </div>
          <div className='bg-red flex' >
            <ArrowLeftIcon className='w-40' />
            <Text></Text>
            <ArrowRightIcon className='w-40' />
          </div>
        </div>
    </div>
  )
}

export default Home;