import React, { useState, useContext, useEffect } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import UserForm from '../components/UserForm';
import UserContext from '../context/UserContext';

const HomePage = () => {
    const { users, addUserHandler, updateUserHandler, deleteUserHandler } = useContext(UserContext);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 9;

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);

    // Handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [users, currentPage, totalPages]);

    const openModal = (user = null) => {
        setEditingUser(user);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setEditingUser(null);
    };

    const handleFormSubmit = (user) => {
        if (editingUser) {
            updateUserHandler({ ...user, id: editingUser.id });
        } else {
            addUserHandler(user);
        }
        closeModal();
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">User Management</h1>
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => openModal()}>
                    Add User
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-wrap pb-5">
                {currentUsers.map((user) => (
                    <Card
                        key={user.id}
                        user={user}
                        onEdit={() => openModal(user)}
                        onDelete={() => deleteUserHandler(user.id)}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            {users.length > usersPerPage && (
                <div className="flex mt-5 justify-center">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-1 border rounded-lg disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`px-4 py-2 mx-1 border rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-1 border rounded-lg disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <UserForm initialData={editingUser} onSubmit={handleFormSubmit} />
            </Modal>
        </div>
    );
};

export default HomePage;
