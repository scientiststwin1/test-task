import { Link } from "react-router-dom";
import HeadLine4 from '../../atoms/headLine4';

const MainFooter = () => {
    return (
        <footer className='w-full flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 justify-between text-xs text-main-gray'>
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

            <HeadLine4>
                COPYRIGHT 2013 DISPLAY ALL RIGHTS RESERVED
            </HeadLine4>
        </footer>
    )
}

export default MainFooter