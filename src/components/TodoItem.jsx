import React from 'react';
import yearK from '../utils/yearK';
import dayAndMonthK from '../utils/dayAndMonthK.js';

export function TodoItem({ date }) {
  const { day : d, month : m, year : y }= date

    return (
    <li>
        {dayAndMonthK(d, m)}{yearK(y)}
    </li>
  )
}
