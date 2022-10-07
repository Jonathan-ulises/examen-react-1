import React, { FormEvent } from 'react'
import Aside from './Aside'
import './Main.css'
import { useState } from 'react';

const Main = () => {

  const [contJava, setContJava] = useState(0);
  const [contPython, setContPython] = useState(0);
  const [contKotlin, setContKotlin] = useState(0);

  const onSubmitForm = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (ev.currentTarget['rdLenguaje'].value != null) {
      const v = ev.currentTarget['rdLenguaje'].value
      switch(v) {
        case 'jar':
          setContJava(contJava + 1)
          break;
        case 'py':
          setContPython(contPython + 1)
          break;
        case 'kt':
          setContKotlin(contKotlin + 1)
          break;
      }
    }
  }

  return (
    <div className='container-fluid'>
      <main className='row'>
        <section className='col-8'>
          <article className='container-fluid'>
            <div className="row shadow rounded mt-5 p-3">
              <p className='h3 text-center'>¿Cuál es tu lenguaje de programacion favorito</p>
              <form onSubmit={ev => onSubmitForm(ev)}>
                <div className="row justify-content-between" >
                  <div className='col-2 text-center'>
                    <img className='img-lg' src="https://cdn.svgporn.com/logos/java.svg" alt="" />
                    <div className="form-check mt-5">
                      <input className="form-check-input" value="jar" type="radio" name="rdLenguaje" id="rbJava" defaultChecked />
                      <label className="form-check-label" htmlFor="rdLenguaje">
                        Java
                      </label>
                    </div>
                  </div>

                  <div className='col-2 text-center'>
                    <img className='img-lg' src="https://cdn.svgporn.com/logos/python.svg" alt="" />
                    <div className="form-check mt-5">
                      <input className="form-check-input" value="py" type="radio" name="rdLenguaje" id="rbPython" />
                      <label className="form-check-label" htmlFor="rdLenguaje">
                        Python
                      </label>
                    </div>
                  </div>

                  <div className='col-2 text-center'>
                    <img className='img-lg' src="https://cdn.svgporn.com/logos/kotlin-icon.svg" alt="" />
                    <div className="form-check mt-5">
                      <input className="form-check-input" value="kt" type="radio" name="rdLenguaje" id="rbKotlin" />
                      <label className="form-check-label" htmlFor="rdLenguaje">
                        Kotlin
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-grid mt-3">
                  <button type='submit' className="btn btn-secondary">Votar</button>
                  </div>
              </form>
            </div>
          </article>
        </section>
        <div className='col-4'>
          <div className="row shadow rounded mt-5">
            <Aside java={contJava} python={contPython} kotlin={contKotlin} />
          </div>
        </div>
      </main>
    </div>

  )
}

export default Main