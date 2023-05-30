import React, { useState } from 'react';
import './Input.css';

function Input({ label, type, value, onChange }) {
    return (
        <div className="input-group">
            <label className="input-label">{label}</label>
            <input type={type} value={value} onChange={onChange} className="input-field" />
        </div>
    );
}


export { Input };
