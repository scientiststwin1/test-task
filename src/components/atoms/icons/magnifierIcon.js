import PropTypes from 'prop-types';

const MagnifierIcon = props => {
    const { className } = props;

    return (

        <svg className={className} viewBox="0 0 66.000000 66.000000" preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,66.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M185 573 c-74 -39 -115 -104 -115 -182 0 -27 5 -62 11 -78 13 -35 64
                    -90 104 -110 40 -21 131 -21 172 0 45 24 55 22 47 -9 -6 -21 1 -34 42 -75 53
                    -54 97 -65 127 -31 30 33 21 69 -30 123 -40 43 -51 50 -75 45 -32 -6 -35 2
                    -11 47 21 41 21 132 1 172 -22 42 -67 85 -105 101 -43 19 -131 17 -168 -3z
                    m182 -97 c27 -30 33 -44 33 -82 0 -84 -50 -134 -134 -134 -128 0 -172 172 -63
                    241 24 15 44 19 81 16 42 -4 55 -10 83 -41z"/>
            </g>
        </svg>
    )
}

export default MagnifierIcon

MagnifierIcon.prototype = {
    className: PropTypes.string,
}