import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const car=[{id:1,name:"volvo"},{id:2,name:"scania"},{id:3,name:"leyland"},{id:4,name:"tata"}];

  return (
    <div>
      <ul>
        {
          car.map((ele)=>(
            <li key={ele.id}>{ele.name} {ele}</li>
          ))
        }

      </ul>

    </div>
  )
}

export default App
