import { useState } from 'react'
import './App.css'
import { PriceProvider } from './Prod'
import P1 from './P1'

function App() {
 
  return (
   <PriceProvider>
    <div> HAI<P1></P1></div>
    
   </PriceProvider>
  )
}

export default App
