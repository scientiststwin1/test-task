import React from 'react';
import Subtitle from '../../components/atoms/subtitle'
import WorkServices from '../../components/organisms/workServices';
import PageTitle from '../../components/organisms/pageTitle';
import AboutBusiness from '../../components/organisms/aboutBusiness';

const About = () => {
  return (
    <div className="pb-6">

      <PageTitle title="ABOUT MY BUSINESS" />

      <div className="w-full py-6">
        <AboutBusiness />
      </div>

      <div className="w-full space-y-4">
        <div className="w-[75vw] m-auto">
          <Subtitle>SERVICES</Subtitle>
        </div>
        <div>
          <WorkServices />
        </div>
      </div>

    </div>
  )
}

export default About;