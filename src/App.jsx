// App.jsx
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddCrew from './crews/AddCrew';
import EditCrew from './crews/EditCrew';
import ReadCrew from './crews/ReadCrew';
import Sidebar from './crews/Sidebar';

const App = () => {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '200px', padding: '20px', width: 'calc(100% - 200px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<AddCrew />} />
          <Route path="/gallery" element={<ReadCrew />} />
          <Route path="/edit/:id" element={<EditCrew />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
