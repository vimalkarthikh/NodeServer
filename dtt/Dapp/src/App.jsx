import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [car, setNcar] = useState([{id:1,name:"Volvo"},{id:2,name:"BMW"},{id:3,name:"Benz"}])
const delet=(iid)=>{
  const updated=car.filter((e)=>e.id!=iid);
  setNcar(updated);
}
  return (<div>
    <ol>
      {car.map((ele)=>(<li key={ele.id}>{ele.name} 
      <button onClick={()=>delet(ele.id)}>del</button></li>))}
    </ol>
  </div>)
}

export default App
