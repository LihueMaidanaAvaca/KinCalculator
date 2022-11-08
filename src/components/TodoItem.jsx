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
      <section className='kinsection'>        
       <img src={kin.imgTone} alt="tono" className="tone"/>
       <img src={kin.imgSeal} alt="sello" className="seal" />
       <h1>
        {[kin.Umbral]}
       </h1>
      </section>
    </>
  )
}
