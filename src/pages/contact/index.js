import React from 'react';
import PageTitle from '../../components/organisms/pageTitle';
import ContactSection from '../../components/organisms/contact';
import MapContainer from '../../components/molecules/mapContainer';
import { Helmet } from 'react-helmet';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


const Contact = () => {

  const reCaptchaKey = process.env.REACT_APP_RECAPTCHA_TOKEN

  const storeTimes = {
    'Monday - Thursday': '8 am - 5 pm',
    'Friday': '8 am - 6 pm',
    'Saturday': '9 am - 5 pm',
    'Sunday & Holidays': 'Closed',
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact to Build studio company" />
      </Helmet>

      <PageTitle title="GOT A QUESTION OR INQUIRY?" />

      <section className='w-full h-96 overflow-hidden relative'>
        <MapContainer
          style={{ height: "22rem" }}
          initialMapCenter={{ lat: 48.00, lng: -132.00 }}
          markerPosition={{ lat: 48.00, lng: -132.00 }}
        />
      </section>

      <div className="w-full flex flex-col items-center py-6 ">
        <section className='container'>
          <ContactSection storeTimes={storeTimes} />
        </section>

      </div>
    </GoogleReCaptchaProvider>

  )
}

export default Contact;