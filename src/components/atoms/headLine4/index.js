import PropTypes from 'prop-types';

const HeadLine4 = props => {

    const { children, className } = props;


    return (
        <h3 className={className}>
            {children}
        </h3>
    )
}

HeadLine4.prototype = {
    children: PropTypes.element,
    className: PropTypes.string
}

export default HeadLine4