import React, { useState, useEffect } from 'react';
import Nav from '../../components/navbar/nav';
import style from './style.css';
import eventModel from '../../models/eventModel';
import Table from '../../components/create/table/table';
import Stage from '../../components/create/stage/stage';
import { useNavigate } from 'react-router-dom';

const Book = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    const rowNames = ["A", "B", "C", "D", "E", "F", "G", "H"];

    const [selected, setSelected] = useState({});

    useEffect(() => {
        async function fetchData() {
            let res = await eventModel.getActiveEvent();
            console.log(res);
            setEvents(res);
        }
        fetchData();
    }, []);


    const handleSeatClick = (newSeat) => {
        setSelected(newSeat);
    };

    function confirmSeat() {
        console.log('confirm seat');
        navigate('/event', { state: { seat: selected } });
    }


    return (
        <>
            <Nav />
            <div className="booking-container">
                <div className='seat-view'>
                    <Stage />
                    <div id="booking" className='booking-area'>
                        {/* Antalet keys -1 pga _id */}
                        {events.seats && Array.from({ length: Object.keys(events.seats).length - 1 }).map((_, j) => (
                            <div className="row" key={j}>
                                <h1>{rowNames[j]}</h1>
                                {events.seats[rowNames[j]] && Array.from({ length: Object.keys(events.seats.A)[Object.keys(events.seats.A).length - 1] / 2 }).map((_, i) => (
                                    <Table
                                        seatInfo={{ "row": rowNames[j], "nr": i * 2 + 1 }}
                                        onSeatClick={handleSeatClick}
                                        isBooked={[events.seats[rowNames[j]][i * 2 + 1], events.seats[rowNames[j]][i * 2 + 2]]}
                                        key={i} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {selected.nr && <div className="confirm-container">
                    <h1>Vald plats</h1>
                    <h2>{selected.row}{selected.nr}</h2>
                    <button onClick={confirmSeat}>Välj plats</button>
                </div>}
            </div>
        </>
    );
};
export default Book;