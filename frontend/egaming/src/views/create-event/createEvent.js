import React from 'react';
import Nav from '../../components/navbar/nav';
import CreateForm from '../../components/create/form/createForm';
import style from './style.css';

const createEvent = () => {
    return (
        <div>
            <Nav />
            <CreateForm />
        </div>
    );
};

export default createEvent;