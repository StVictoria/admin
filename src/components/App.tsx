import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Advice from './advice/Advice';
import './App.scss';
import Sidebar from './base/Sidebar';
import Cosmos from './cosmos/Cosmos';
import Countries from './countries/Countries';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Cosmos />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
