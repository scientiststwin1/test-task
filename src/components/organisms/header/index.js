import MainHeader from '../../molecules/header/mainHeader';
import HeaderNavbar from '../../molecules/header/headerNavbar';

const Header = () => {
    return (
        <div className="w-full">
            <footer className="w-[75vw] mx-auto">
                <div className="py-6">
                    <MainHeader />
                </div>
                <div className="bg-gray-400 w-full h-[0.5px]" > </div>
                <div className="py-6">
                    <HeaderNavbar />
                </div>
            </footer>

        </div>
    )
}

export default Header