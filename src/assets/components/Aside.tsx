import React from 'react'
import { useState } from 'react';

type Contador = {
  java: number,
  python: number,
  kotlin: number
}

const Aside = ({java, python, kotlin}: Contador) => {

  return (
    <aside>
      <p className='h2 text-center'>Resultados</p>
      <div className="mt-3 text-center">
        <p>Java: <span className='fw-bold'>{java} votos</span></p>
        <p>Python: <span className="fw-bold">{python} votos</span></p>
        <p>Kotlin: <span className='fw-bold'>{kotlin} votos</span></p>
      </div>
    </aside>
  )
}

export default Aside