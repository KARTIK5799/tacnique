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
       
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">{user.name || 'Club Name'}</h3>
          <p className="text-sm text-gray-600">@{user.username || 'username'}</p>
        </div>

     
        <div className="mt-2 flex justify-between">
          <p className="text-sm text-gray-600">{user.address?.street || 'No Address Available'}</p>
          <p className="text-sm text-gray-600">{user.company?.name || 'No Company'}</p>
        </div>

    
        <div className="mt-2 flex justify-between">
          <p className="text-sm text-gray-600">{user.phone || 'No Phone'}</p>
          <p className="text-sm text-gray-600">{user.email || 'No Email'}</p>
        </div>

       
        <div className="mt-4 flex justify-start items-center gap-3">
          <button
            className='border-2 flex rounded-full p-2 transition-colors duration-200 hover:text-green-600'
            onClick={() => onEdit(user)}>
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button
            className='border-2 flex rounded-full p-2 transition-colors duration-200 hover:text-green-600'
            onClick={() => onDelete(user.id)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
