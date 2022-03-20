import classnames from 'classnames';
import PropTypes from 'prop-types';

const HeadLine4 = props => {

    const { children, className } = props;

    const combineClassNames = classnames(
        'text-xs text-main-gray',
        className
    )

    return (
        <h3 className={combineClassNames}>
            {children}
        </h3>
    )
}

HeadLine4.prototype = {
    children: PropTypes.element,
    className: PropTypes.string
}

export default HeadLine4