// import logo from './logo.svg';
import './App.css';
import { useState, useRef }from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from './components/TodoList'
import { NavBarHeader } from './components/NavBarHeader';


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
      <NavBarHeader/>
      <section className="App-header" id="1">
        <TodoList dates={dates} />
        <div className='inputs'>
        <input className='input animate__animated animate__backInUp' ref={todoDayRef} type="number" min="1" max="31" placeholder="día"></input>
        <input className='input animate__animated animate__backInUp' ref={todoMonthRef} type="number" min="1" max="12" placeholder="mes"></input>
        <input className='input animate__animated animate__backInUp' ref={todoYearRef} type="number" placeholder="año"></input>
        </div>
        <button className='button animate__animated animate__pulse' onClick={handleDateAdd} >💫</button>
        <h3 className='animate__animated animate__flash'>Hola. Ingrese su fecha de nacimiento</h3>
      </section>
    </div>
  );
}

export default App;
