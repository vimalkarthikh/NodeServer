import All from "./All"
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
function App() {

  return (
    <><Router>
    <Link to='/'>All in</Link>
    <Routes>
      <Route path='/'>{All}</Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
