import React from 'react';
import './App.scss';
import Sidebar from './base/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        Main content
      </main>
    </div>
  );
}

export default App;
