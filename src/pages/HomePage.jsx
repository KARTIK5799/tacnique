import React, { useState, useContext } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import UserForm from '../components/UserForm';
import UserContext from '../context/UserContext';

const HomePage = () => {
    const { users, addUserHandler, updateUserHandler, deleteUserHandler } = useContext(UserContext);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const openModal = (user = null) => {
        console.log("Opening modal"); 
        setEditingUser(user);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setEditingUser(null);
    };

    const handleFormSubmit = (user) => {
        console.log("Submitting user:", user); 
        if (editingUser) {
            updateUserHandler({ ...user, id: editingUser.id });
        } else {
            addUserHandler(user);
        }
        closeModal();
    };

    return (
        <div className="px-5 flex w-screen flex-col items-center h-auto justify-center">
            <div className="bg-[#FEFEFF] border border-gray-2 shadow-lg h-auto rounded-full md:rounded-3xl m-5 p-4 flex items-center justify-between w-full lg:w-1/2">
                <h1 className="text-2xl font-bold">User Management</h1>
                <button
                      className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white md:rounded-xl"
                    onClick={() => openModal()}>
                    Add User
                </button>
            </div>
            <div className="grid pb-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-wrap">
                {users.map((user) => (
                    <Card
                        key={user.id}
                        user={user}
                        onEdit={() => openModal(user)}
                        onDelete={() => deleteUserHandler(user.id)}
                    />
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <UserForm initialData={editingUser} onSubmit={handleFormSubmit} />
            </Modal>
        </div>
    );
};

export default HomePage;
