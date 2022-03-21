import TextArea from '../../atoms/textArea';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

const ContactForm = () => {
    return (
        <form className='space-y-3'>
            <Input required className="w-3/4" type="text" placeholder="Name" />
            <Input required className="w-3/4" type="email" placeholder="Email Address" />
            <Input className="w-3/4" type="text" placeholder="Subject" />
            <TextArea required maxlength="1000" className="w-full h-48 " ></TextArea>

            <Button type="submit" size="sm">SEND MESSAGE</Button>
        </form>
    )
}

export default ContactForm