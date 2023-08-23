
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import './Home.css'
import React, { useState } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <Main></Main>

  </React.StrictMode>,
)



function Main() {
  const[cnt,setCount]=useState(0);
  return (
    <>
     <header class="header">
      <div class="logo">Start BootStrap</div>
      <nav name="navbar">
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Shop</a>
        <button class="cartbutton">
          Cart <span class="cartcount"> {cnt}</span></button>
      </nav>
    </header>
    

    <div class="cor">
      <h1>Shop in Style</h1><br></br>
      <p>With this shop hompeage template</p>
    </div>

  <div class="main">
    <Home name="Fancy Product" price="$40-$80" cnt={cnt} setCount={setCount} ></Home>
    <Home name="Special Item" price="$18" ops="$20" cnt={cnt} setCount={setCount}></Home>
    <Home name="Sale Item" price="$25" ops="$50" cnt={cnt} setCount={setCount}></Home>
    <Home name="Popular Item" price="$40" cnt={cnt} setCount={setCount}></Home>
    <Home name="Sale Item" price="$25" ops="$50" cnt={cnt} setCount={setCount}></Home>
    <Home name="Fancy Product" price="$120 - $180" cnt={cnt} setCount={setCount}></Home>
    <Home name="Special Item" price="$18" ops="$20" cnt={cnt} setCount={setCount}></Home>
    <Home name="Popular Item" price="$40" cnt={cnt} setCount={setCount}></Home>
  </div>
  <footer class="foor">
    <p>Copyright © Your Website 2023</p>
  </footer>
    </>
  )
}


