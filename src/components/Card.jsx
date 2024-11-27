import React from 'react';

const Card = ({ user, onEdit, onDelete }) => {
    return (
        <div className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
            <div>
                <p className="text-lg font-semibold">{user.name} ({user.username})</p>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Phone: {user.phone}</p>
                <p className="text-sm text-gray-600">Website: {user.website}</p>
                <p className="text-sm text-gray-600">
                    Address: {user.address?.street}, {user.address?.city}, {user.address?.zipcode}
                </p>
                <p className="text-sm text-gray-600">Company: {user.company.name}</p>
            </div>
            <div className="flex space-x-2">
                <button
                    className="px-4 py-1 text-white bg-blue-500 rounded"
                    onClick={() => onEdit(user)}>
                    Edit
                </button>
                <button
                    className="px-4 py-1 text-white bg-red-500 rounded"
                    onClick={() => onDelete(user.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
