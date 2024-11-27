import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
    try {
        const { data } = await axios.get(API_URL);
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const addUser = async (user) => {
    try {
        const { data } = await axios.post(API_URL, user);
        return data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export const updateUser = async (user) => {
    try {
        if (!user.id) {
            throw new Error('User ID is required for updating.');
        }

        const { data } = await axios.put(`${API_URL}/${user.id}`, user);
        return data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        console.log(`User with ID ${id} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
