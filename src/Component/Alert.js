import React from 'react';
import PropTypes from 'prop-types';
const Alert = ({alert}) => {
    return (
        alert !== null &&(
            <div className="container">
            <div className="alert alert-danger">{alert}</div>
            </div>
        )
    )
}
Alert.propTypes ={
    alert:PropTypes.bool.isRequired
}
export default Alert;