
import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text', required = false, placeholder }) => {
    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border rounded"
                required={required}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;
