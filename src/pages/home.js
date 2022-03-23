import React from 'react';
import MainHomeSection from '../components/organisms/mainHomeSection';
import IntroduceSection from '../components/organisms/introduceSection';
import FeaturedSection from '../components/organisms/featuredSection';
import { Helmet } from 'react-helmet';


const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="It is Home page" />
      </Helmet>

      <MainHomeSection />

      <IntroduceSection />

      <FeaturedSection />

    </div>
  )
}

export default Home;