import { Upcoming } from '@mui/icons-material';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Sidebar from './base/Sidebar';
import Latest from './people/Latest';
import Popular from './films/Popular';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
