const userModel = {
    getUsers: async function getUsers() {
        try {
            const result = await fetch('http://localhost:1337/users');
            return await result.json();
        } catch (error) {
            console.error('Error checking login:', error);
            return error;
        }
    },
    getUsersByEvent: async function getUsersByEvent(event) {
        try {
            const result = await fetch(`http://localhost:1337/users/event/${event}`);
            return await result.json();
        } catch (error) {
            console.error('Error fetching users:', error);
            return error;
        }
    },
    createUser: async function createUser(data) {
        try {
            const result = await fetch('http://localhost:1337/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await result.json();
        } catch (error) {
            console.error('Error creating user:', error);
            return error;
        }
    },
    getUserFromSeat: async function getUserFromSeat(seat) {
        try {
            const result = await fetch('http://localhost:1337/users/seat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(seat)
            });
            return await result.json();
        } catch (error) {
            console.error('Error fetching user:', error);
            return error;
        }
    },
    deleteUser: async function deleteUser(id) {
        try {
            const result = await fetch(`http://localhost:1337/users/${id}`, {
                method: 'DELETE'
            });
            return await result.json();
        } catch (error) {
            console.error('Error deleting user:', error);
            return error;
        }
    },
    updateUser: async function updateUser(data) {
        try {
            const result = await fetch('http://localhost:1337/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await result.json();
        } catch (error) {
            console.error('Error updating user:', error);
            return error;
        }
    }
}

export default userModel;