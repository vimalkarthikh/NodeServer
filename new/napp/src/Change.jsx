import React,{useContext,useState} from 'react'
import { PriceContext } from './PriceContext'

function Change() {
   const[count,setCount]=useState(0);
    const{setCost}=useContext(PriceContext);
    const{cost}=useContext(PriceContext);

    const cst=()=>{setCount(count+1);}
    const dec=()=>{if(count!=0) setCount(count-1);}
    setCost(count*549);

  return (
    <>
    <div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">iPhone 9</h5>
        <p class="card-text">An apple mobile which is nothing like apple  </p>
        <p class="card-text">Brand: Apple &emsp;&emsp;&emsp;category: smartphones</p>
        <hr />
        <p class="card-text">Rating: 4.69 &emsp;Stock: 94
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <b><i>$ 549</i></b></p>
        <p className='but'><button onClick={cst} className='atc'>+</button><h6 className='ct'>{count}</h6><button onClick={dec} className='atc'>-</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <h6>Prod cost is : {cost}</h6></p>
        <hr></hr>
        
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Change