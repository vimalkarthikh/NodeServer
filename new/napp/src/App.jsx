import { useState } from 'react'
import'./App.css'
import { PriceProvider } from './PriceContext'
import Prod from './Prod'
import Change from './Change'
import P1 from './P1'
import P2 from './P2'
import P3 from './P3'
import P4 from './P4'
import Gt from './Gt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PriceProvider>
     
      <div className='spc'>
      <Prod></Prod>
      <Change></Change>
      <P1></P1>
      <P2></P2>
      <P3></P3>
      <P4></P4>
      
      </div>
    </PriceProvider>
  )
}

export default App
