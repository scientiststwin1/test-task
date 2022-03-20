import React from 'react';
import Subtitle from '../../components/atoms/subtitle'
import Text from '../../components/atoms/text';
import WorkServices from '../../components/organisms/workServices';
import PageTitle from '../../components/organisms/pageTitle';
import SettingsIcon from '../../components/atoms/icons/settingsIcon';

const About = () => {
  return (
    <div>

      <PageTitle title="ABOUT MY BUSINESS" />

      <div className="w-full">
        <div className="w-[75vw] text-gray-500 m-auto py-3 divide-y-[2rem] divide-transparent ">
          <div className="w-full grid grid-cols-[45%_53%] justify-between  ">
            <div className="bg-slate-300"> ok </div>
            <div className="divide-y-8 divide-transparent">
              <Text>
                Lorem nn Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining
                essentially unchanged.
              </Text>
            </div>
          </div>

          <div className="w-full grid grid-cols-[53%_45%] justify-between">
            <div className="space-y-4">
              <Subtitle className="font-bold">MISSION STATEMENT </Subtitle>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining
                essentially unchanged.
              </Text>
            </div>
            <div className="space-y-4">
              <Subtitle className="font-bold"> FUN FACTS</Subtitle>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining
                essentially unchanged.
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full space-y-6">
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