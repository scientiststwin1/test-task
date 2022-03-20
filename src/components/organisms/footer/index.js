import FooterA from '../../molecules/footerA/footerA';
import MainFooter from '../../molecules/footerA/mainFooter';

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='w-full py-8 bg-zinc-800'>
                <div className='w-[75vw] mx-auto'>
                    <FooterA />
                </div>
            </div>

            <div className='w-[75vw] mx-auto py-5'>
                <MainFooter />
            </div>
        </div>
    )
}

export default Footer;