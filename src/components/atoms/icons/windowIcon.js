import PropTypes from 'prop-types';

const WindowIcon = props => {
    const { className } = props;

    return (
        <svg className={className} viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M100 840 c-19 -19 -20 -33 -20 -340 0 -307 1 -321 20 -340 19 -19 33
                    -20 400 -20 367 0 381 1 400 20 19 19 20 33 20 340 0 307 -1 321 -20 340 -19
                    19 -33 20 -400 20 -367 0 -381 -1 -400 -20z m778 -62 l3 -38 -380 0 -381 0 0
                    33 c0 19 3 37 7 40 4 4 173 6 377 5 l371 -3 3 -37z m0 -335 l-3 -258 -375 0
                    -375 0 -3 258 -2 257 380 0 380 0 -2 -257z"/>
                <path d="M704 789 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
                    -11z"/>
                <path d="M764 789 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
                    -11z"/>
                <path d="M824 789 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
                    -11z"/>
            </g>
        </svg>
    )
}

export default WindowIcon

WindowIcon.prototype = {
    className: PropTypes.string,
}