import React, { useState } from 'react';
import './Input.css';

function Input({ label, type, value, onChange, className }) {
    return (
        <div className="input-group">
            <label className="input-label">{label}</label>
            <input className={`input-field ${className}`} type={type} value={value} onChange={onChange} />
        </div>
    );
}


export { Input };
