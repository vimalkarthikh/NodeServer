import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { inc,dec } from './countSlice'
import Data from './data.json'
function App() {
 const dispatch=useDispatch();
 const count=useSelector(state=>state.counter);
console.log(count.products);
const a=count.products.price;
const[n,setN]=useState(0);

  return (
    <div>
     <h1 className='as'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Cart &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <button onClick={()=>location.reload()} className='btn btn-warning'>Reset Cart</button></h1>
    {count.products.map((e)=>(
      <div key={e.id}>  
       
        <div class="card mb-3 max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={e.thumbnail} alt="..." ></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">{e.title}</h2>
        <h4><button className='btn btn-success' onClick={()=>{dispatch(inc(e));setN(n+1)}} >+</button><i><b>&ensp;&ensp;{e.price } &ensp;&ensp;</b></i>  
        <button className='btn btn-info' onClick={()=>{dispatch(dec(e));}}>-</button>  </h4> 
        <p class="card-text">{e.description}</p>
        <p class="card-text"><i>Brand: {e.brand}&ensp;&ensp; Category: {e.category} &ensp;&ensp; Stock: {e.stock}</i></p>
        
        
      </div>
    </div>
  </div>
</div>
        
      </div>
    ))}
    {/* <h1>count ;{count}</h1> */}
    
    {/* <button onClick={()=>dispatch(dec())}>------</button> */}
    </div>
    
  )
}

export default App
