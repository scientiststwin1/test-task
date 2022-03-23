import PropTypes from 'prop-types';

const GridIcon = props => {

    const { className, onClick } = props;

    return (
        <svg className={className} onClick={onClick} enable-background="new 0 0 52 51" version="1.1" viewBox="0 0 52 51" space="preserve">
            <g>
                <rect fill={className} height="20" width="20" />
                <rect fill={className} height="20" width="20" x="29" />
                <rect fill={className} height="20" width="20" y="28" />
                <rect fill={className} height="20" width="20" x="29" y="28" />
            </g>
        </svg>
    )
}

GridIcon.prototype = {
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default GridIcon
