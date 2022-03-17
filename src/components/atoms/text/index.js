import classnames from 'classnames'
import React from 'react'

const Text = (props) => {

    const { classNames, children } = props;

    const combineClassNames = classnames(
        'text-gray-500',
        classNames
    )

    return (
        <p className={combineClassNames}>{children}</p>
    )
}

export default Text