import React, { createContext, useState, useEffect } from 'react';
import { fetchUsers, addUser, updateUser, deleteUser } from '../services/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    const addUserHandler = (user) => {
   
        const currentUsers = [...users];
        
   
        addUser(user).then((newUser) => {
           
            setUsers((prev) => [...prev, { ...newUser, id: Date.now() }]);
            console.log('User added:', newUser);

         
        }).catch(error => {
            console.error('Error adding user:', error);
        
            setUsers(currentUsers);
        });
    };

    const updateUserHandler = (updatedUser) => {
        const existingUser = users.find((user) => user.id === updatedUser.id);

        if (existingUser) {
            updateUser(updatedUser).then(() => {
                setUsers((prev) =>
                    prev.map((user) => (user.id === updatedUser.id ? { ...user, ...updatedUser } : user))
                );
            }).catch((error) => {
                console.error("Error updating user:", error);
            });
        } else {
            setUsers((prev) =>
                prev.map((user) => (user.id === updatedUser.id ? { ...user, ...updatedUser } : user))
            );
            console.log("User updated locally: ", updatedUser);
        }
    };

    const deleteUserHandler = (id) => {
        deleteUser(id).then(() => {
            setUsers((prev) => prev.filter((user) => user.id !== id));
        });
    };

    return (
        <UserContext.Provider value={{ users, addUserHandler, updateUserHandler, deleteUserHandler }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
