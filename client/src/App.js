import './App.css';
import axios from 'axios';
import React from 'react';

const apiCall = () => {
  axios.get('http://localhost:3000').then((data) => {
    console.log(data);
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <button onClick={apiCall}>make api call</button>
      </header>
    </div>
  );
}

export default App;
