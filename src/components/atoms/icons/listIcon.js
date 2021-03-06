import PropTypes from 'prop-types';

const ListIcon = props => {
    const { className, onClick } = props

    return (
        <svg className={className} onClick={onClick} enable-background="new 0 0 24 24" id="Layer_1" viewBox="0 0 24 24" space="preserve" >
            <g>
                <g>
                    <path d="M23.244,17.009H0.75c-0.413,0-0.75,0.36-0.75,0.801v3.421C0,21.654,0.337,22,0.75,22h22.494c0.414,0,0.75-0.346,0.75-0.77    
                    V17.81C23.994,17.369,23.658,17.009,23.244,17.009z M23.244,9.009H0.75C0.337,9.009,0,9.369,0,9.81v3.421    
                    c0,0.424,0.337,0.769,0.75,0.769h22.494c0.414,0,0.75-0.345,0.75-0.769V9.81C23.994,9.369,23.658,9.009,23.244,9.009z     
                    M23.244,1.009H0.75C0.337,1.009,0,1.369,0,1.81V5.23c0,0.423,0.337,0.769,0.75,0.769h22.494c0.414,0,0.75-0.346,0.75-0.769V1.81    
                    C23.994,1.369,23.658,1.009,23.244,1.009z" />
                </g>
            </g>
        </svg>
    )
}

ListIcon.prototype = {
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default ListIcon
