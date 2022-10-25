import React from 'react'

export function TodoItem({ date }) {
  const { day, month, year}= date

  

    return (
    <li>
        {day}-{month}-{year}
    </li>
  )
}
