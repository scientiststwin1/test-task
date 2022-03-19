import React from 'react'
import GridIcon from '../../components/atoms/icons/gridIcon';
import ListIcon from '../../components/atoms/icons/listIcon';
import Subtitle from '../../components/atoms/subtitle';
import PageTitle from '../../components/organisms/pageTitle';
import WorkSamples from '../../components/organisms/workSamples';

const Work = () => {
  return (
    <div className='mb-6 space-y-6' >
      <PageTitle title="CHECK OUT WHAT I CAN DO" />
      <div className='w-[75vw] m-auto' >
        <div className='flex justify-between items-center mb-8' >
          <div className="flex space-x-2 text-gray-500 ">
            <h4> ALL </h4>
            <span> / </span>
            <h4> PRINT </h4>
            <span> / </span>
            <h4> PHOTOGRAPHY </h4>
            <span> / </span>
            <h4> WEBS </h4>
            <span> / </span>
            <h4> APPLICATIONS </h4>
          </div>
          <div className='flex space-x-2' >
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