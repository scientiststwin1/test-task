import PropTypes from 'prop-types';

const HeadLine3 = props => {

    const { children, className } = props;


    return (
        <h3 className={className}>
            {children}
        </h3>
    )
}

HeadLine3.prototype = {
    children: PropTypes.element,
    className: PropTypes.string
}

export default HeadLine3