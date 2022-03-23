import { useLocation, Link } from 'react-router-dom';
import classnames from 'classnames';

const HeaderNavbar = () => {
    const { pathname } = useLocation();
    const pages = [
        { name: "HOME", route: '/' },
        { name: "ABOUT", route: '/about' },
        { name: "WORK", route: '/work' },
        { name: "CONTACT", route: '/contact' },
    ]

    const linkStyle = route => classnames({ "text-main-green": pathname === route })

    return (
        <div>
            <ul className='flex justify-center md:justify-start space-x-6 font-bold'>
                {
                    pages.map(page => {
                        return (
                            <li key={page.route} className={linkStyle(page.route)}>
                                <Link to={page.route}> {page.name} </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HeaderNavbar;