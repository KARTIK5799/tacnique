import React, { useState, useEffect } from 'react';
import InputField from './InputField';

const UserForm = ({ initialData = {}, onSubmit }) => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            city: '',
            zipcode: ''
        },
        company: {
            name: ''
        }
    });

    useEffect(() => {
        if (initialData && Object.keys(initialData).length > 0) {
            setUser({
                name: initialData.name || '',
                username: initialData.username || '',
                email: initialData.email || '',
                phone: initialData.phone || '',
                website: initialData.website || '',
                address: {
                    street: initialData.address?.street || '',
                    city: initialData.address?.city || '',
                    zipcode: initialData.address?.zipcode || ''
                },
                company: {
                    name: initialData.company?.name || ''
                }
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setUser((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    [addressField]: value
                }
            }));
        } else if (name.startsWith('company.')) {
            const companyField = name.split('.')[1];
            setUser((prev) => ({
                ...prev,
                company: {
                    ...prev.company,
                    [companyField]: value
                }
            }));
        } else {
            setUser((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputField label="Name" name="name" value={user.name} onChange={handleChange} required placeholder="Enter name" />
            <InputField label="Username" name="username" value={user.username} onChange={handleChange} required placeholder="Enter username" />
            <InputField label="Email" name="email" value={user.email} onChange={handleChange} required type="email" placeholder="Enter email" />
            <InputField label="Phone" name="phone" value={user.phone} onChange={handleChange} required placeholder="Enter phone number" />
            <InputField label="Website" name="website" value={user.website} onChange={handleChange} required placeholder="Enter website" />

       
            <InputField label="Street" name="address.street" value={user.address.street} onChange={handleChange} required placeholder="Enter street" />
            <InputField label="City" name="address.city" value={user.address.city} onChange={handleChange} required placeholder="Enter city" />
            <InputField label="Zipcode" name="address.zipcode" value={user.address.zipcode} onChange={handleChange} required placeholder="Enter zipcode" />

          
            <InputField label="Company" name="company.name" value={user.company.name} onChange={handleChange} required placeholder="Enter company name" />

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default UserForm;
