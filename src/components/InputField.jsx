import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text', required = false, placeholder, error }) => {
    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-2 border rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
                required={required}
                placeholder={placeholder}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default InputField;
