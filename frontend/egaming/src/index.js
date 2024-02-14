import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';

import './index.css';
import Start from './views/start/start';
import Event from './views/event/event';
import CreateEvent from './views/create-event/createEvent';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider /> */}
    <Router>
      <main>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/event" element={<Event />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
