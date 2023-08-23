import React,{useContext,useState} from 'react'
import { PriceContext } from './PriceContext'

function P3() {
    const[count,setCount]=useState(0);
    const{setCost3}=useContext(PriceContext);
    const{cost3}=useContext(PriceContext);

    const cst=()=>{setCount(count+1);}
    const dec=()=>{if(count!=0) setCount(count-1);}
    setCost3(count*280);
  return (
    <>
    <div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">OPPO F19</h5>
        <p class="card-text">OPPO F19 is officially announced on April 2021.  </p>
        <br></br><p class="card-text">Brand: Oppo &emsp;&emsp;&emsp;category: smartphones</p>
        <hr />
        <p class="card-text">Rating: 4.3 &emsp;Stock: 123
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <b><i>$ 280</i></b></p>
        <p className='but'><button onClick={cst} className='atc'>+</button><h6 className='ct'>{count}</h6><button onClick={dec} className='atc'>-</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <h6>Prod cost is : {cost3}</h6></p>
        <hr></hr>
        
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default P3