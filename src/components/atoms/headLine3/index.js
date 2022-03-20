import classnames from 'classnames';
import PropTypes from 'prop-types';
const HeadLine3 = props => {

    const { children, className } = props;

    const combineClassNames = classnames(
        'font-bold text-lg',
        className
    )

    return (
        <h3 className={combineClassNames}>
            {children}
        </h3>
    )
}

HeadLine3.prototype = {
    children: PropTypes.element,
    className: PropTypes.string
}

export default HeadLine3