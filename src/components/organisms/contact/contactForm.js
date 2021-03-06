import { useState } from 'react';
import TextArea from '../../atoms/textArea';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import Subtitle from '../../atoms/subtitle';
import ContactService from '../../../service/contact.service';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const contactService = new ContactService();

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [description, setdescription] = useState("")

    const [information, setInformation] = useState(null)

    const { executeRecaptcha } = useGoogleReCaptcha();

    const updateState = setState => event => {
        event.preventDefault();
        setState(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const token = await executeRecaptcha('secret')

        const data = {
            name: name,
            email: email,
            subject: subject,
            description: description,
            token
        }

        contactService.create(data).then(response => {
            const resData = response.data
            setInformation({ subject: resData.subject, description: resData.description })
        }).catch(error => {
            console.log("Failed submit form")
        })
    }


    return (
        <>
            {information ?
                <div className='space-y-4'>
                    <Subtitle>
                        {information.subject}
                    </Subtitle>

                    <Text>
                        {information.description}
                    </Text>
                </div>
                :
                <form className='space-y-3' onSubmit={handleSubmit} >
                    <Input onChange={updateState(setName)} required className="w-full md:w-3/4" type="text" placeholder="Name" />
                    <Input onChange={updateState(setEmail)} required className="w-full md:w-3/4" type="email" placeholder="Email Address" />
                    <Input onChange={updateState(setSubject)} className="w-full md:w-3/4" type="text" placeholder="Subject" />
                    <TextArea onChange={updateState(setdescription)} required maxLength="1000" className="w-full h-48 " ></TextArea>

                    <Button type="submit" size="sm">SEND MESSAGE</Button>
                </form>
            }
        </>
    )
}

export default ContactForm