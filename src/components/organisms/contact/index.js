import Subtitle from '../../atoms/subtitle';
import Text from '../../atoms/text';
import ContactFrom from './contactForm';

const Contact = props => {

    const { storeTimes } = props

    return (
        <div className='w-full py-4 grid space-y-6 md:space-y-0 grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-x-12'>
            <div className='w-full space-y-4'>
                <Subtitle> CONTACT FORM </Subtitle>

                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>

                <ContactFrom />

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
                        <div className='w-full space-y-1 text-main-gray'>
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

    )
}

export default Contact