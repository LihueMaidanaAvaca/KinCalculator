// import logo from './logo.svg';
import './App.css';
import { useState, useRef }from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem';



function App() {
  const[dates, setDates] = useState([])

  const todoDayRef = useRef();
  const todoMonthRef = useRef();
  const todoYearRef = useRef();

  const handleDateAdd = () => {
    const day = todoDayRef.current.value;
    if(day === '') return;
    const month = todoMonthRef.current.value;
    if(month === '') return;
    const year = todoYearRef.current.value;
    if(month === '') return;

    setDates(() => {
      return [ {id: uuidv4(), day, month, year}]
    })
    
    todoDayRef.current.value = null;
    todoMonthRef.current.value = null;
    todoYearRef.current.value = null;
  }

  console.log(dates)

  return (
    <div className="App">
      <header className="App-header">
        <TodoList dates={dates} />
        <input ref={todoDayRef} type="number" min="1" max="31" placeholder="dd"></input>
        <input ref={todoMonthRef} type="number" min="1" max="12" placeholder="mm"></input>
        <input ref={todoYearRef} type="number" placeholder="yyyy"></input>
        <button onClick={handleDateAdd} >💫</button>
      </header>
    </div>
  );
}

export default App;
