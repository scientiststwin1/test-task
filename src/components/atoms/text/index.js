import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types'
const Text = (props) => {

    const { className, children } = props;

    const combineClassNames = classnames(
        'text-gray-500',
        className
    )

    return (
        <p className={combineClassNames}>{children}</p>
    )
}

Text.prototype = {
    className: PropTypes.string,
    children: PropTypes.element,
}

export default Text;