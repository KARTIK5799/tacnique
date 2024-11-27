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

    const [errors, setErrors] = useState({});

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

    const validateForm = () => {
        const newErrors = {};
    
       
        if (!user.name) newErrors.name = 'Name is required';
    
        
        if (!user.username) {
            newErrors.username = 'Username is required';
        } else if (user.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }
 
        if (!user.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            newErrors.email = 'Email is invalid';
        } else if (!user.email.endsWith('@gmail.com')) {
            newErrors.email = 'Email must end with @gmail.com';
        } else if (user.email.length < 6) {
            newErrors.email = 'Email must be at least 6 characters';
        }
    
   
        if (!user.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(user.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
    
    
        if (!user.address.street) newErrors['address.street'] = 'Street address is required';
        if (!user.address.city) newErrors['address.city'] = 'City is required';
        if (!user.address.zipcode) newErrors['address.zipcode'] = 'Zipcode is required';
    
    
        if (!user.company.name) newErrors['company.name'] = 'Company name is required';
    
      
        if (user.website && !/^(https?:\/\/)?([a-zA-Z0-9]+[.-_])*[a-zA-Z0-9]+\.(com|in)$/i.test(user.website)) {
            newErrors.website = 'Website must end with .com or .in';
        }
    
        setErrors(newErrors); 
        return Object.keys(newErrors).length === 0;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(user);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
                placeholder="Enter name"
                error={errors.name}  
            />
            <InputField
                label="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
                required
                placeholder="Enter username"
                error={errors.username}
            />
            <InputField
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="Enter email"
                error={errors.email}
            />
            <InputField
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
                error={errors.phone}
            />
            <InputField
                label="Website"
                name="website"
                value={user.website}
                onChange={handleChange}
                placeholder="Enter website"
                error={errors.website}
            />
            <InputField
                label="Street"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                required
                placeholder="Enter street"
                error={errors['address.street']}
            />
            <InputField
                label="City"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                required
                placeholder="Enter city"
                error={errors['address.city']}
            />
            <InputField
                label="Zipcode"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                required
                placeholder="Enter zipcode"
                error={errors['address.zipcode']}
            />
            <InputField
                label="Company"
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                required
                placeholder="Enter company name"
                error={errors['company.name']}
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default UserForm;
