import React,{useContext,useState} from 'react'
import { PriceContext } from './PriceContext'

function Gt() {
    const{cost}=useContext(PriceContext);
    return (
    <>
    
    <div>
        <h1>Grand Total: {cost}</h1>
    </div>
    </>
  )
}

export default Gt