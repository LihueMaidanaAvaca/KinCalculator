// import logo from './logo.svg';
import './App.css';
import { useState, useRef }from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from './components/TodoList'



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
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">Solkin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="1">Calcular fecha</a>
      </li>
      
      
    </ul>
  </div>
</nav>
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
