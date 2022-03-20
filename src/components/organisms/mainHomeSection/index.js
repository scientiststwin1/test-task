import React from 'react'
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import Pc from '../../molecules/pc';
import Phone from '../../molecules/phone';
import Tablet from '../../molecules/tablet';
import Sunburst from '../../../assest/images/sunburst.png';

const MainHomeSection = () => {
  return (
    <section className='W-full overflow-x-hidden' >
        <div className='relative w-full bg-main-green bg-no-repeat bg-cover h-[34rem]' style={{ backgroundImage: `url(${Sunburst})` }} >
          <div className='translate-y-40 ' >
            <Pc className='translate-x-[20%] 2xl:translate-x-[30%] translate-y-16' />
            <Tablet className='translate-x-2/4 -translate-y-12' />
            <Phone className='translate-x-2/3 2xl:translate-x-[62%] translate-y-44' />
          </div>
        </div>
        <div className='py-20 w-1/2 m-auto space-y-5 ' >
          <Text className='text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <Button size='md' type='submit' >BROWSE PORTFOLIO</Button>
        </div>
      </section>
  )
}

export default MainHomeSection;