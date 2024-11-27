import React from 'react';

const Card = ({ user, onEdit, onDelete }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-500">
        <img
          src={user.image || 'https://images.pexels.com/photos/29387379/pexels-photo-29387379/free-photo-of-scenic-view-of-colorful-dinant-houses-by-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          alt="Card Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-xl text-gray-800 font-bold">
          {user.name ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase() : 'AP'}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{user.name || 'Club Name'}</h3>
        <p className="text-sm text-gray-600 mt-1">{user.username || 'username'}</p>
        <p className="text-sm text-gray-600 mt-1">{user.email || 'No Email'}</p>
        <p className="text-sm text-gray-600 mt-1">{user.phone || 'No Phone'}</p>
        <p className="text-sm text-gray-600 mt-1">{user.address?.street || 'No Address Available'}</p>
        <p className="text-sm text-gray-600 mt-1">{user.company?.name || 'No Company'}</p>

        <div className="mt-4 flex justify-start items-center gap-3">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            onClick={() => onEdit(user)}>
            Edit
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            onClick={() => onDelete(user.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
