import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './assets/components/Header'
import Main from './assets/components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
