import React from 'react';
import Subtitle from '../../components/atoms/subtitle'
import WorkServices from '../../components/organisms/workServices';
import PageTitle from '../../components/organisms/pageTitle';
import AboutBusiness from '../../components/organisms/aboutBusiness';
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="pb-6">
      <Helmet>
        <title>About</title>
        <meta name="description" content="It is about Build studio company" />
      </Helmet>

      <PageTitle title="ABOUT MY BUSINESS" />

      <div className="w-full py-6">
        <AboutBusiness />
      </div>

      <div className="w-full space-y-4">
        <Subtitle className="container m-auto">SERVICES</Subtitle>
        <WorkServices />
      </div>

    </div>
  )
}

export default About;