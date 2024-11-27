import React from 'react';

const Card = ({ user, onEdit, onDelete }) => {
    return (
        <div className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
            <div>
                <p className="text-lg font-semibold">{user.firstName} {user.lastName}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-600">Department: {user.department}</p>
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
