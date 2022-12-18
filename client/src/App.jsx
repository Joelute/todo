import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  console.log(data)
  return (
    <div className="App">
      <p></p>
    </div>
  )
}

export default App
