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
       <div className='sealposition'>
        <img src={kin.imgTone} alt="tono" className="tone"/>
        <img src={kin.imgSeal} alt="sello" className="seal" />
       </div>
       <h1>
        {[kin.Umbral]}
       </h1>
       <div className='props'>
       <h3>Sello Solar: {kin.tribu}</h3>
       <h3>Tono Lunar: {kin.vibracion}</h3>
       <h3>Onda: {kin.Onda}</h3>
       </div>
      </section>
    </>
  )
}
