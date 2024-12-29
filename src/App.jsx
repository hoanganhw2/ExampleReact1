import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/header'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <Header />
        <h2>Hello dai ca hoang anh 1</h2>
      </div>
    </>
  )
}

export default App
