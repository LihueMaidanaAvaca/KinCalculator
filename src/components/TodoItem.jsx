import React from 'react';
import yearK from '../utils/yearK';
import dayAndMonthK from '../utils/dayAndMonthK.js';
import toKin from '../utils/toKin';
import './TodoItem.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Accordion from 'react-bootstrap/Accordion';

export function TodoItem({ date }) {
  const { day : d, month : m, year : y } = date

  let kin = toKin( yearK(y), dayAndMonthK(d,m) )

    return (
    <>
      <section className='kinsection '>        
       <div className='sealposition'>
        <img src={kin.imgTone} alt="tono" className="tone animate__animated animate__fadeInLeft"/>
        <img src={kin.imgSeal} alt="sello" className="seal animate__animated animate__flip" />
       </div>
       <h1>
        {[kin.Umbral]}
       </h1>
       <div className='props animate__animated animate__fadeIn'>
       <div className='nameandimage'>
       <img src={kin.imgSeal} alt="sello" className="littleseal animate__animated animate__flash" />
       <Accordion defaultActiveKey="0" title="Sello Solar" id="basic-nav-dropdown">
              <Accordion.Item eventKey="0">
              <Accordion.Header>Sello Solar:{kin.tribu}</Accordion.Header>
              <Accordion.Body>
          Vida Entendimiento
        </Accordion.Body>
              </Accordion.Item>
            </Accordion>
       </div>
       <div className='nameandimage'>
       <img src={kin.imgTone} alt="tono" className="littletone animate__animated animate__fadeInLeft" />
       <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
        <Accordion.Header>Tono Lunar: {kin.vibracion}</Accordion.Header>
        <Accordion.Body>
        pensar para buscar distintas formas
        </Accordion.Body>
      </Accordion.Item> 
      </Accordion>    
       </div>
       <div className='nameandimage'>
       <img src={kin.imgWave} alt="sello" className="littleseal animate__animated animate__flash" />
       <h3>Onda: {kin.Onda}</h3>
       </div>
       </div>
       <div>
        <img className='oracle' src={kin.imgGuia} alt="guia" />
        <div className='oraclecenter'>
        <img className='oracle' src={kin.imgLeft} alt="left" />
        <img className='oracle' src={kin.imgSeal} alt="umbral" />
        <img className='oracle' src={kin.imgRight} alt="right" />
        </div>
        <img className='oracle' src={kin.imgHide} alt="hide" />
       </div>
      </section>
    </>
  )
}
