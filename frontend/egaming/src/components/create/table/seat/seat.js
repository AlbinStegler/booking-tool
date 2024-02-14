import React from 'react';
import style from './style.css'

const seat = (seatInfo) => {
    const nr = seatInfo.seatInfo.nr;
    const row = seatInfo.seatInfo.row;

    function clickHandler() {
        console.log(nr);
        console.log(row);
    }

    return (
        <div className='seat' onClick={clickHandler}>
            <p>{seatInfo.seatInfo.nr}</p>
        </div>
    );
};

export default seat;
