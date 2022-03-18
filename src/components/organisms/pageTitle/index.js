import React from 'react'
import Subtitle from '../../atoms/subtitle';

const PageTitle = props => {

    const { title } = props;
    
    return (
        <div className="w-full bg-green-500 py-6">
            <Subtitle className="w-[75vw] m-auto text-white font-bold text-xl">
                {title}
            </Subtitle>
        </div>
    )
}

export default PageTitle;