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
    }
}

export default userModel;