import React from 'react'
import Button from '../../atoms/button';
import Subtitle from '../../atoms/subtitle';

const SubFooter = () => {
    return (
        <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
            <Subtitle className="text-white">
                ARE YOU READY TO BE BLOWN AWAY?
            </Subtitle>
            <Button size='md' type="submit">
                CLICK HERE TO FIND OUT
            </Button>
        </div>
    )
}

export default SubFooter;