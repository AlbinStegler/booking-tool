import React from 'react';
import Seat from './seat/seat';
import style from './style.css';

const table = (seatInfo) => {
    let data1 = { "row": seatInfo.seatInfo.row, "nr": seatInfo.seatInfo.nr }
    let data2 = { "row": seatInfo.seatInfo.row, "nr": seatInfo.seatInfo.nr + 1 }

    return (
        <div className='table' >
            <Seat seatInfo={data1} />
            <Seat seatInfo={data2} />
        </div>
    );
};

export default table;
