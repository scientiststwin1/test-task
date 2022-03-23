import React from 'react';
import PageTitle from '../../components/organisms/pageTitle';
import ContactSection from '../../components/organisms/contact';
import MapContainer from '../../components/molecules/mapContainer';

const Contact = () => {

  const storeTimes = {
    'Monday - Thursday': '8 am - 5 pm',
    'Friday': '8 am - 6 pm',
    'Saturday': '9 am - 5 pm',
    'Sunday & Holidays': 'Closed',
  }

  return (
    <div>
      <PageTitle title="GOT A QUESTION OR INQUIRY?" />

      <section className='w-full h-96'>
        <MapContainer 
          style={{height: "24rem"}} 
          initialMapCenter={{lat: 48.00 , lng: -132.00 }}
          markerPosition={{lat: 48.00 , lng: -132.00 }}
          />
      </section>

      <div className="w-full flex flex-col items-center py-6 ">
        <section className='container'>
          <ContactSection storeTimes={storeTimes} />
        </section>

      </div>
    </div>

  )
}

export default Contact;