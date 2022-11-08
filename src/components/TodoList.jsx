import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({ dates }) {
  return (
    <>
        {dates.map((date)=>(
            <TodoItem key={date.id} date={date}/>
        ))}
    </>
  )
}
