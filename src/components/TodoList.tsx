import React, { FC } from 'react';
import { ITasK } from '../interfaces';
import TodoItem from './TodoItem';


interface Props{
  todoList: ITasK[]
}

const TodoList:FC<Props> = ({todoList}:Props) => {
  return (
    <div className='task-list'>
      {todoList.map(task=>{
        return <TodoItem task={task} />
      })}
    </div>
  );
};

export default TodoList;