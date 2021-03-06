import React from 'react'

const ArrowRightIcon = props => {

    const { className, onClick } = props;

    return (
        <svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
    )
}

export default ArrowRightIcon;