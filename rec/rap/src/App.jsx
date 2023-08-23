import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AniSound from './AniSound'
import { AniProvider } from './AniContext'
import Chang from './Chang'
function App() {
  const [count, setCount] = useState(0)

  return (
    <AniProvider>
    <AniSound></AniSound>
    <Chang></Chang>
          </AniProvider>
  )
}

export default App
