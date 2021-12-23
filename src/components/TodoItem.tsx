import React, { FC } from 'react';
import { ITasK } from '../interfaces';


interface Props{
  task: ITasK
}

const TodoItem:FC<Props> = ({task}) => {
  return (
   <div className='task'>
      <div className='task-item'>
      <span>{task.taskName}</span>
      <span>{task.deadline}</span>
    </div>
    <button>Completed</button>
   </div>
  );
};

export default TodoItem;