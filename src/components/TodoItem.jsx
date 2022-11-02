import React from 'react';
import yearK from '../utils/yearK';
import dayAndMonthK from '../utils/dayAndMonthK.js';
import toKin from '../utils/toKin';
import style from './TodoItem.css'

export function TodoItem({ date }) {
  const { day : d, month : m, year : y } = date

  let kin = toKin( yearK(y), dayAndMonthK(d,m) )

    return (
    <>
     <div className={style.img}>      
      <img src={kin.image} alt="sello" />
     </div>
     <li>
        {[kin.Umbral]}
     </li>
    </>
  )
}
