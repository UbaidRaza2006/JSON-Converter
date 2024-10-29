import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CsvToJsonConverter from './work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
             <CsvToJsonConverter/>
    </div>
  )
}

export default App
