import React, { useEffect, useState } from 'react';
import style from './style.css';
import userModel from '../../models/userModel';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let res = await userModel.getUsers();
            setUsers(res);
        }
        fetchData();
    }, []);

    let Registered = users.map((user, index) => (
        <div key={index} className="user">
            <h1>{user.member.member_nick}</h1>
            <div className='two-col'>
                <p>{user.member.firstname} {user.member.lastname}</p>
                <p>{user.member.phone1}</p>
            </div>
            <div className='two-col'>
                <p>Plats</p>
                <p>{user.seat.row} {user.seat.seat}</p>
            </div>
        </div>
    ));



    return (
        <div className="users-container">
            <h1>Registrerade användare</h1>
            <p>Antal användare: {users.length}</p>
            {Registered}
        </div>
    );
};

export default Users;