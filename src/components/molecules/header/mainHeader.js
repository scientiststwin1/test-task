import TwitterIcon from '../../atoms/icons/twitterIcon';
import FacebookIcon from '../../atoms/icons/facebookIcon';
import PinterestIcon from '../../atoms/icons/pinterestIcon';
import GooglePlusIcon from '../../atoms/icons/googlePlusIcon';
import Dribble from '../../atoms/icons/dribbleIcon';
import Image from '../../atoms/image';

const MainHeader = () => {

  const svgStyle = "w-6 md:w-8 xl:w-8 fill-main-gray hover:fill-blue-500 hover:cursor-pointer"

  return (
    <div className="flex justify-between">
      <div>
        <Image src={require('../../../assest/images/logo_png.png')} />
      </div>

      <div className='flex space-x-1'>
        <TwitterIcon className={svgStyle} />
        <FacebookIcon className={svgStyle} />
        <PinterestIcon className={svgStyle} />
        <GooglePlusIcon className={`${svgStyle} w-7 md:w-9`} />
        <Dribble className={svgStyle} />
      </div>

    </div>
  )
}

export default MainHeader