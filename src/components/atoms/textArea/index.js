import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import Classes from './textArea.module.css';

const TextArea = props => {

    const { children, className, placeholder, rows, cols, ...prop } = props

    const combineClasses = classnames(
        'outline-none border border-[2px] border-gray-500 px-2 py-1',
        className,
    )

    return (
        <textarea className={combineClasses} rows={rows} cols={cols} placeholder={placeholder} {...prop} >
            {children} 
        </textarea>
    )
}

export default TextArea

TextArea.prototype = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.string,
    cols: PropTypes.string,
}
