import React from 'react';

const Alert = ({alert}) => {
    return (
        alert !== null &&(
            <div className="container">
            <div className="alert alert-danger">{alert}</div>
            </div>
        )
    )
}

export default Alert;