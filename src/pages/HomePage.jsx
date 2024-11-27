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
            <div className="flex w-screen m-10 px-10 justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">User Management</h1>
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
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
