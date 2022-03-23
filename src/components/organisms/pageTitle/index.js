import React from 'react'
import Subtitle from '../../atoms/subtitle';

const PageTitle = props => {

    const { title } = props;

    return (
        <div className="w-full text-center md:text-left bg-green-500 py-6">
            <Subtitle className="container m-auto text-slate-50 font-bold text-xl">
                    {title}
            </Subtitle>
        </div>
    )
}

export default PageTitle;