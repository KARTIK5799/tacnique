import React, { useState, useContext, useEffect } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import UserForm from '../components/UserForm';
import UserContext from '../context/UserContext';

const HomePage = () => {
    const { users, addUserHandler, updateUserHandler, deleteUserHandler } = useContext(UserContext);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6;

    // Calculate the index of the first and last user for the current page
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    
    // Slice the users array to only show the users for the current page
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Calculate total pages
    const totalPages = Math.ceil(users.length / usersPerPage);

    useEffect(() => {
        // Reset to page 1 if the total number of users is less than 6 after deletion
        if (users.length <= 6) {
            setCurrentPage(1);
        }
    }, [users]);  // Runs every time the users array changes (after deletion)

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

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
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
                {currentUsers.map((user) => (
                    <Card
                        key={user.id}
                        user={user}
                        onEdit={() => openModal(user)}
                        onDelete={() => {
                            deleteUserHandler(user.id);
                        }}
                    />
                ))}
            </div>

       
            {totalPages > 1 && users.length > 6 && (
                <div className="flex justify-center gap-4 py-4">
                    <button
                        onClick={goToPreviousPage}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                        disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span className="text-lg text-gray-700">{currentPage} / {totalPages}</span>
                    <button
                        onClick={goToNextPage}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                        disabled={currentPage === totalPages}>
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
