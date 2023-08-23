import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import './main.css'
import './index.css'
import All from './All'
import Header from './Header'
import Fsd from './Fsd'

import './Header.css'
import Ds from './Ds'
import Cyber from './Cyber'
import Career from './Career'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>
    <Header></Header>
     <div className='nba'>
      <Link to='/'>All</Link>
      <Link to='/datascience'>Data Science</Link>
      <Link to='/fullstackdevelopment'>Full Stack Development</Link>
      <Link to='/cybersecurity'>Cyber Security</Link>
      <Link to='/career'>Career</Link>
     </div>
     <hr></hr>
      <Routes>
        <Route path='/'Component={All}></Route>
        <Route path='/datascience'Component={Fsd}></Route>
        <Route path='/fullstackdevelopment'Component={Ds}></Route>
        <Route path='/cybersecurity'Component={Cyber}></Route>
        <Route path='/career'Component={Career}></Route>
      </Routes>
    </Router>
   </>
)
