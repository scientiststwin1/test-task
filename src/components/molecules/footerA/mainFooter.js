import { Link } from "react-router-dom";
import FooterA from './footerA';
import HeadLine4 from '../../atoms/headLine4';

const MainFooter = () => {
    return (
        <footer className='w-full flex justify-between text-xs text-main-gray'>
            <HeadLine4>
                COPYRIGHT 2013 DISPLAY ALL RIGHTS RESERVED
            </HeadLine4>
            <div>
                <ul className='flex space-x-2'>
                    <li> <Link to='/'> HOME </Link> </li>
                    <span> / </span>
                    <li> <Link to='/about'> ABOUT  </Link> </li>
                    <span> / </span>
                    <li> <Link to='/work'> WORK  </Link> </li>
                    <span> / </span>
                    <li> <Link to='/contact'> CONTACT </Link> </li>
                </ul>
            </div>
        </footer>
    )
}

export default MainFooter