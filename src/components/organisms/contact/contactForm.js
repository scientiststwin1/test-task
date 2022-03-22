import { useState } from 'react';
import TextArea from '../../atoms/textArea';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import ContactService from '../../../service/contact.service';

const contactService = new ContactService();

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [description, setdescription] = useState("")

    const [information, setInformation] = useState(null)

    const updateState = setState => event => {
        event.preventDefault();
        setState(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        contactService.create({
            name: name,
            email: email,
            subject: subject,
            description: description,
        }).then(response => {
            setInformation(description)
        }).catch(error => {
            alert("Failed submit form")
        })
    }


    return (
        <>
            {information ?
                <Text>
                    {information}
                </Text>
                :
                <form className='space-y-3' onSubmit={handleSubmit} >
                    <Input onChange={updateState(setName)} required className="w-3/4" type="text" placeholder="Name" />
                    <Input onChange={updateState(setEmail)} required className="w-3/4" type="email" placeholder="Email Address" />
                    <Input onChange={updateState(setSubject)} className="w-3/4" type="text" placeholder="Subject" />
                    <TextArea onChange={updateState(setdescription)} required maxlength="1000" className="w-full h-48 " ></TextArea>

                    <Button type="submit" size="sm">SEND MESSAGE</Button>
                </form>
            }
        </>
    )
}

export default ContactForm