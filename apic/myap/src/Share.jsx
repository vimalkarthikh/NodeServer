import React from 'react'
import { useState } from 'react'
import Data from './Data.json'
import './App.css'
import { Porduct } from './Prod';
function Share() {
  return (
    <div>
        <div className='nod' >
        {
        Data.map((i)=>{
          return (<Porduct key={i.id} i={i} />)
})
       
      }
      </div>
    </div>
  )
}

export default Share