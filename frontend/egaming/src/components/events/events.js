import React, { useState, useEffect } from 'react';
import './style.css';
import eventModel from '../../models/eventModel';

const Events = () => {

    const [events, setEvents] = useState([]);

    const updateEvents = async () => {
        let res = await eventModel.getEvents();
        setEvents(res);
    }

    // useEffect(() => {
    //     async function fetchData() {
    //         let res = await eventModel.getEvents();
    //         setEvents(res);
    //     }
    //     fetchData();
    // }, []);

    useEffect(() => {
        updateEvents();
    }, []);

    async function activateEvent(e, eventName) {
        await eventModel.activateEvent({ eventName: eventName });
        updateEvents();
    }

    async function deleteEvent(e, id) {
        await eventModel.deleteEvent(id);
        updateEvents();
    }

    let Events = events.map((event, index) => (
        <div key={index} className="event">
            <h1>{event.eventName}</h1>
            <div className='two-col'>
                <p>{new Date(event.eventDate).toLocaleDateString('sv-SE')}</p>
                <button onClick={e => deleteEvent(e, event._id)}>Ta bort event</button>
            </div>
            <div className='two-col'>
                {event.active === true ? <p>AKTIVT</p> : <p>EJ AKTIVT</p>}
                <button onClick={e => activateEvent(e, event.eventName)}>Aktivera</button>
            </div>
        </div>
    ));

    return (
        <div className='events-container'>
            <h1>Event</h1>
            <p>Antal event: {events.length}</p>
            {Events}
        </div>
    );
};

export default Events;