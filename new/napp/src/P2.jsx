import React,{useContext,useState} from 'react'
import { PriceContext } from './PriceContext'

function P2() {
    const[count,setCount]=useState(0);
    const{setCost2}=useContext(PriceContext);
    const{cost2}=useContext(PriceContext);

    const cst=()=>{setCount(count+1);}
    const dec=()=>{if(count!=0) setCount(count-1);}
    setCost2(count*1249);
  return (
    <>
    <div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://i.dummyjson.com/data/products/3/thumbnail.jpg" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Samsung Universe 9</h5>
        <p class="card-text">Samsung's new variant which goes beyond Galaxy to the Universe </p>
        <p class="card-text">Brand: Samsung &emsp;&emsp;&emsp;category: smartphones</p>
        <hr />
        <p class="card-text">Rating: 4.09 &emsp;Stock: 36
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <b><i>$ 1249</i></b></p>
        <p className='but'><button onClick={cst} className='atc'>+</button><h6 className='ct'>{count}</h6><button onClick={dec} className='atc'>-</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <h6>Prod cost is : {cost2}</h6></p>
        <hr></hr>
        
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default P2