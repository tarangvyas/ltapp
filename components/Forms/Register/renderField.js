import React from 'react'

const renderField = ({ input, label, type, classes,defaultValue, meta: { touched, error } }) => {
    return (
    <div>
        <input {...input} className={classes} placeholder={label} type={type}/>
        {touched && error && <span className="text-danger">{error}</span>}
    </div>
    );
}

export default renderField
