// import logo from './logo.svg';
import './App.css';
import { useState }from 'react'

function App() {
  const[date, setDate] = useState([{day:28, month:4, year:1994}])

  return (
    <div className="App">
      <header className="App-header">
        <input type="number" min="1" max="31" ></input>
        <input type="number" min="1" max="12" ></input>
        <input type="number" ></input>
        <button >➕</button>
      </header>
    </div>
  );
}

export default App;
