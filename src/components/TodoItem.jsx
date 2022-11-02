import React from 'react';
import yearK from '../utils/yearK';
import dayAndMonthK from '../utils/dayAndMonthK.js';
import toKin from '../utils/toKin';
import './TodoItem.css'

export function TodoItem({ date }) {
  const { day : d, month : m, year : y } = date

  let kin = toKin( yearK(y), dayAndMonthK(d,m) )

    return (
    <>
      <img src={kin.imgTone} alt="tono" className="tone"/>
      <img src={kin.imgSeal} alt="sello" className="seal" />
     <li>
        {[kin.Umbral]}
     </li>
    </>
  )
}
