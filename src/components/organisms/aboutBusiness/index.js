import Image from '../../atoms/image';
import Text from '../../atoms/text';
import Subtitle from '../../atoms/subtitle'

const AboutBusiness = () => {
    return (
        <div className="container text-gray-500 m-auto py-3 divide-y-[2rem] divide-transparent ">
            <div className="w-full grid grid-cols-1 space-y-6 xl:grid-cols-[40%_57%] justify-between  ">
                <div>
                    <Image src={require('../../../assest/images/clerk.png')} />

                </div>
                <div className="space-y-2">
                    <Text>
                        Lorem nn Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining
                        essentially unchanged.
                    </Text>

                    <Text>
                        Lorem nn Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining
                        essentially unchanged.
                    </Text>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 space-y-4 xl:grid-cols-[48%_48%] justify-between">
                <div className="space-y-4">
                    <Subtitle className="font-bold">MISSION STATEMENT </Subtitle>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining
                        essentially unchanged.
                    </Text>
                </div>
                <div className="space-y-4">
                    <Subtitle className="font-bold"> FUN FACTS</Subtitle>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining
                        essentially unchanged.
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default AboutBusiness