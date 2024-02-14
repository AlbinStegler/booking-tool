const eventModel = {
    getEvents: async function getEvents() {
        try {
            const data = await fetch('http://localhost:1337/event');
            return data.json();
        } catch (error) {
            console.error('Error fetching event:', error);
            return error;
        }
    },
    addEvent: async function addEvent(data) {
        try {
            const result = await fetch('http://localhost:1337/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            return await result.status;
        } catch (error) {
            console.error('Error adding event:', error);
            return error;
        }
    },
    activateEvent: async function activateEvent(data) {
        try {
            const result = await fetch('http://localhost:1337/event', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            return await result.status;
        } catch (error) {
            console.error('Error activating event:', error);
            return error;
        }
    }
}

export default eventModel;