import React, { useEffect, useState } from 'react';
import './style.css';
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

    async function handleInOut(user) {
        if (user.checked_in) {
            user.checked_in = false;
        }
        else {
            user.checked_in = true;
        }
        // await userModel.updateUser(user);
        // finns ingen updateUser i userModel
        setUsers([...users]);
    }

    let Registered = users.map((user, index) => (
        <div key={index} className="user" onDoubleClick={handleInOut} >
            <div className='two-col'>
                <h1>{user.member.member_nick}</h1>
                {user.checked_in ? <p className='green'>Checked in</p> : <p className='red'>Not checked in</p>}
            </div>
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