import SubFooter from '../../molecules/footer/subFooter';
import MainFooter from '../../molecules/footer/mainFooter';

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='w-full py-6 md:py-8 bg-zinc-800'>
                <div className='container mx-auto'>
                    <SubFooter />
                </div>
            </div>

            <div className='container mx-auto py-5'>
                <MainFooter />
            </div>
        </div>
    )
}

export default Footer;