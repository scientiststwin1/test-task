import React from 'react'
import GridIcon from '../../components/atoms/icons/gridIcon';
import ListIcon from '../../components/atoms/icons/listIcon';
import PageTitle from '../../components/organisms/pageTitle';
import WorkSamples from '../../components/organisms/workSamples';
import HeadLine3 from '../../components/atoms/headLine3';

const Work = () => {
  return (
    <div className='mb-6 space-y-6' >
      <PageTitle title="CHECK OUT WHAT I CAN DO" />
      <div className='container m-auto' >
        <div className='flex justify-between items-center mb-6 md:mb-8' >
          <div className="flex overflow-x-scroll space-x-1 md:space-x-2 text-gray-500 ">
            <HeadLine3> ALL</HeadLine3>
            <span> / </span>
            <HeadLine3> PRINT </HeadLine3>
            <span> / </span>
            <HeadLine3> PHOTOGRAPHY </HeadLine3>
            <span> / </span>
            <HeadLine3> WEBS </HeadLine3>
            <span> / </span>
            <HeadLine3> APPLICATIONS </HeadLine3>
          </div>
          <div className='hidden md:flex space-x-2' >
            <GridIcon className='w-6 fill-gray-500' />
            <ListIcon className='w-6 fill-gray-500 ' />
          </div>
        </div>
        <WorkSamples />
      </div>
    </div>
  )
}

export default Work;