import React from 'react'
import TextArea from '../../components/atoms/textArea';
import Input from '../../components/atoms/input';
import Subtitle from '../../components/atoms/subtitle';
import Text from '../../components/atoms/text';
import Button from '../../components/atoms/button';

const Contact = () => {

  const storeTimes = {
    'Monday - Thursday': '8 am - 5 pm',
    'Friday': '8 am - 6 pm',
    'Saturday': '9 am - 5 pm',
    'Sunday & Holidays': 'Closed',
  }

  return (
    <div>

      <div className="w-full flex flex-col items-center py-6 ">
        <div className='w-[75vw] grid grid-cols-[1.5fr_1fr] gap-x-12'>

          <div className='w-full space-y-3'>
            <Subtitle> CONTACT FORM </Subtitle>

            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Text>

            <Input className="w-3/4" type="text" placeholder="Name" />
            <Input className="w-3/4" type="text" placeholder="Email Address" />
            <Input className="w-3/4" type="text" placeholder="Subject" />
            <TextArea className="w-full h-48 " ></TextArea>

            <Button type="submit" size="sm">SEND MESSAGE</Button>

          </div>

          <div>
            <div className='space-y-3'>
              <Subtitle> CONTACT INFO </Subtitle>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

              <div className='text-main-gray'>
                {/* TODO: check Design and Text  */}
                <div className='flex space-x-1 ' >
                  <span className='font-bold'>email: </span>
                  <div className='text-main-green'>info@display.com</div>
                </div>

                <div className='flex space-x-1 ' >
                  <span className='font-bold'>phone: </span>
                  <div> 1.306.222.4545 </div>
                </div>

              </div>

              <div className='text-main-gray'>
                222 2nd Ave South <br />
                Saskabush, SK S7M 1T6
              </div>

            </div>

            <div className='mt-6 space-y-3'>
              <Subtitle> STORE HOURS </Subtitle>

              <div>
                <div className='w-3/5 space-y-1'>
                  {
                    Object.keys(storeTimes).map(day => {
                      return (
                        <div className='w-full flex flex-row justify-between'>
                          <div>{day}</div>
                          <div>{storeTimes[day]}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>

  )
}

export default Contact;