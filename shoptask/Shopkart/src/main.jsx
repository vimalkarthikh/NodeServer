import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import './Home.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <header class="header">
      <div class="logo">Start BootStrap</div>
      <nav name="navbar">
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Shop</a>
        <button class="cartbutton">
          Cart<span class="cartcount"></span></button>
      </nav>
    </header>
    

    <div class="cor">
      <h1>Shop in Style</h1><br></br>
      <p>With this shop hompeage template</p>
    </div>

  <div class="main">
    <Home name="Fancy Product" price="$40-$80" ></Home>
    <Home name="Special Item" price="$18" ops="$20"></Home>
    <Home name="Sale Item" price="$25" ops="$50"></Home>
    <Home name="Popular Item" price="$40"></Home>
    <Home name="Sale Item" price="$25" ops="$50"></Home>
    <Home name="Fancy Product" price="$120 - $180"></Home>
    <Home name="Special Item" price="$18" ops="$20"></Home>
    <Home name="Popular Item" price="$40"></Home>
  </div>
  <footer class="foor">
    <p>Copyright © Your Website 2023</p>
  </footer>

  </React.StrictMode>,
)
