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
}

export default userModel;