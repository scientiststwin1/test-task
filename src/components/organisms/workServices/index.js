import ServiceBox from '../../molecules/serviceBox';
import SettingsIcon from '../../atoms/icons/settingsIcon';
import CameraIcon from '../../atoms/icons/cameraIcon';
import MagnifierIcon from '../../atoms/icons/magnifierIcon';
import WindowIcon from '../../atoms/icons/windowIcon';


const WorkServices = () => {
    return (
        <div className="bg-gray-200">
            <div className="w-[75vw] m-auto grid grid-cols-4 ">
                <ServiceBox icon={<SettingsIcon className="w-14" />} text="WEBSITES" />
                <ServiceBox icon={<CameraIcon className="w-14" />} text="PHOTOGRAPHY" />
                <ServiceBox icon={<MagnifierIcon className="w-14" />} text="SEO" />
                <ServiceBox icon={<WindowIcon className="w-14" />} text="APPLICATIONS" />
            </div>
        </div>
    )
}

export default WorkServices