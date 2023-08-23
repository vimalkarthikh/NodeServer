import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Fsd from './Fsd'

function App() {
 

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              
            </li>
            <li>
              <Link to='/fsd'>FSD</Link>
              <ul>
                <li>
                <Link to='/fsd/volvo'>VOLVO</Link>
                </li>
                <li>
                <Link to='/fsd/benz'>BENZ</Link>
                </li>
                <li>
                <Link to='/fsd/rr'>Rolls Royce</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/fsd' Component={Fsd}></Route>
          <Route path='/fsd/:car' Component={Fsd}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
