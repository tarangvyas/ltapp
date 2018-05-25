import React from 'react'

const renderField = ({ input, label, type,id, classes,defaultValue, meta: { touched, error } }) => {
    
    return (
    <div>
        <input {...input} className={classes} id={id} placeholder={label} type={type}  />
        {touched && error && <span className="text-danger">{error}</span>}
    </div>
    );
}

export default renderField