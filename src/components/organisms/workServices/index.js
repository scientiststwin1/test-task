import { useState } from 'react';
import ServiceBox from '../../molecules/serviceBox';
import SettingsIcon from '../../atoms/icons/settingsIcon';
import CameraIcon from '../../atoms/icons/cameraIcon';
import MagnifierIcon from '../../atoms/icons/magnifierIcon';
import WindowIcon from '../../atoms/icons/windowIcon';
import Text from '../../atoms/text';
import ArrowRightIcon from '../../atoms/icons/arrowRightIcon';

const WorkServices = () => {

    const services = [
        {
            name: "WEBSITES",
            icon: <SettingsIcon className="w-14" />,
            description: `
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised
            `,
            items: [
                "Lorem Ipsum is simply dummy - 1",
                "Lorem Ipsum is simply dummy - 2 ",
                "Lorem Ipsum is simply dummy - 3 "
            ]
        },
        {
            name: "PHOTOGRAPHY",
            icon: <CameraIcon className="w-14" />,
            description: `
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
            `,
            items: [
                "remaining essentially unchanged. - 1",
                "remaining essentially unchanged. - 2",
                "remaining essentially unchanged. - 3"
            ]
        },
        {
            name: "SEO",
            icon: <MagnifierIcon className="w-14" />,
            description: `
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries
            `,
            items: [
                "It was popularised. - 1",
                "It was popularised. - 2",
                "It was popularised. - 3"
            ]
        },
        {
            name: "APPLICATIONS",
            icon: <WindowIcon className="w-14" />,
            description: `
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            `,
            items: [
                "It has survived not only five centuries - 1",
                "It has survived not only five centuries - 2",
                "It has survived not only five centuries - 3"
            ]
        },
    ]

    const [serviceInfo, setServiceInfo] = useState(services[0])

    const onServiceHandller = serviceName => {
        const selectedService = services.find(service => service.name === serviceName)
        setServiceInfo(selectedService)
    }

    return (
        <div className='space-y-6'>
            <div className="bg-gray-200">
                <div className="w-[75vw] m-auto grid grid-cols-4 ">
                    {
                        services.map(service =>
                            <ServiceBox
                                key={service.name}
                                icon={service.icon}
                                text={service.name}
                                onClick={onServiceHandller.bind(this, service.name)}
                            />)
                    }
                </div>
            </div>
            <div className="w-[75vw] m-auto space-y-4">
                <div>
                    <Text> {serviceInfo.description} </Text>
                </div>
                <div>
                    <ul className='pl-6'>
                        {
                            serviceInfo.items.map(serviceItem => {
                                return (
                                    <li key={serviceItem} className="flex text-main-gray">
                                        <ArrowRightIcon className="w-5" />
                                        {serviceItem}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkServices