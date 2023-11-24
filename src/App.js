import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss';

function App() {
  // Declare a new stat variable, which we will call "count"

  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <h1>React - Sass - UseState</h1>
      <button type="button" className='btn btn-primary' onClick={() => setCount(count + 1)}>+</button>
      <span id='badge'>{count}</span>
      <button type="button" className='btn btn-success' onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
