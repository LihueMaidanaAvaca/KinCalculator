import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({ dates }) {
  return (
    <ul>
        {dates.map((date)=>(
            <TodoItem key={date.id} date={date}/>
        ))}
    </ul>
  )
}
