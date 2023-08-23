import React, { useState } from 'react'

function P() {
    const[name,setName]=useState("Volvo")
  return (
    <div>This is Parent {name}</div>
  )
}

export default P