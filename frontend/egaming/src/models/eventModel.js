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
    },
    getActiveEvent: async function getActiveEvent() {
        try {
            const data = await fetch('http://localhost:1337/event/active');
            return data.json();
        } catch (error) {
            console.error('Error fetching active event:', error);
            return error;
        }
    },
    bookSeat: async function bookSeat(data) {
        try {
            const result = await fetch('http://localhost:1337/event/book', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            return await result.status;
        } catch (error) {
            console.error('Error booking seat:', error);
            return error;
        }
    },
    deleteEvent: async function deleteEvent(id) {
        try {
            const result = await fetch(`http://localhost:1337/event/${id}`, {
                method: 'DELETE',
            });

            return await result.status;
        } catch (error) {
            console.error('Error deleting event:', error);
            return error;
        }
    },

}

export default eventModel;