
import './App.css'
import{BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Edu from './Edu'
import Skill from './Skill'
import Proj from './Proj'
function App() {

  return (
    <>
    <BrowserRouter>
         <nav class="navbar navbar-dark bg-dark">
            <p className="navbar-brand vkh" >Vimal Karthik</p>
            <div class="form-inline">
              
              <Link to='/' className='tt btn btn-dark'>Home</Link>
              <Link to='/about' className='tt btn btn-dark'>About</Link>
              <Link to='/edu' className='tt btn btn-dark'>Education</Link>
              <Link to='/skill' className='tt btn btn-dark'>Skills</Link>
              <Link to='/project' className='tt btn btn-dark'>Project</Link>
              

            </div>
         </nav>


    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/edu' element={<Edu/>}></Route>
      <Route path='/skill' element={<Skill/>}></Route>
      <Route path='/project' element={<Proj/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
