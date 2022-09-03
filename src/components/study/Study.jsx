import React from 'react'
import {getAllStudy} from './Study';
import "../study/Study.css";
function Study() {
    const studies=getAllStudy();
  return (
    <main className='box-e'>
                    {studies.map(study=>

                    <div  key={study.id}className='list-study'>
                        
                        <div className='list-ie'><h3>{study.carrera}</h3></div>

                        <div className='list-type'><h4>{study.tipo}</h4></div>


                        <div className='list-institute'><p>{study.instituto}</p></div>

                        <div className='list-year'><p>{study.añoFin}</p></div>

                    </div>
                        )}
                </main>
  )
}

export default Study;