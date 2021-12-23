import React, { ChangeEvent, MouseEvent, FC, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { ITasK } from './interfaces';

const  App:FC =()=> {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITasK[]>([])

  const handleChange = (event:ChangeEvent<HTMLInputElement>):void=>{
     if(event.target.name === "task"){
       setTask(event.target.value)
     }else{
       setDeadline(Number(event.target.value))
     }
  }

  const addTask = (event:MouseEvent<HTMLButtonElement>):void=>{
    event.preventDefault()
    setTodoList([...todoList, {taskName:task, deadline:deadline}])
    setTask("")
    setDeadline(0)
  }

  return (
    <div className="App">
      <header className='header'>
          <form action="">
          <div className='form-control'>
           <input required  type="text" name="task" value={task} placeholder='Task...' onChange={handleChange}/>
           <input required type="number" name="deadline" value={deadline} placeholder='Deadline...' onChange={handleChange}/>
          </div>
          <button type='submit' className='btn' onClick={addTask}>Add Task</button>
          </form>
      </header>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
