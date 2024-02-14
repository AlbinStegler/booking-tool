const adminModel = {
    checkLogin: async function checkLogin(data) {
        try {
            const result = await fetch('http://localhost:1337/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            return await result.json();
        } catch (error) {
            console.error('Error checking login:', error);
            return error;
        }
    },
}

export default adminModel;