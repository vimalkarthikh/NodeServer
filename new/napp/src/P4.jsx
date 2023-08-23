import React,{useContext,useState} from 'react'
import { PriceContext } from './PriceContext'
function P4() {
    const[count,setCount]=useState(0);
    const{setCost4}=useContext(PriceContext);
    const{cost4}=useContext(PriceContext);

    const cst=()=>{setCount(count+1);}
    const dec=()=>{if(count!=0) setCount(count-1);}
    setCost4(count*499);
  return (
    <>
    <div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://i.dummyjson.com/data/products/5/thumbnail.jpg" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Huawei P30</h5>
        <p class="card-text">Huawei’s re-badged P30 Pro New Edition officially unveiled in Germany and now the device has made its way to UK.  </p>
        <p class="card-text">Brand: Apple &emsp;&emsp;&emsp;category: smartphones</p>
        <hr />
        <p class="card-text">Rating: 4.09 &emsp;Stock: 32
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <b><i>$ 499</i></b></p>
        <p className='but'><button onClick={cst} className='atc'>+</button><h6 className='ct'>{count}</h6><button onClick={dec} className='atc'>-</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <h6>Prod cost is : {cost4}</h6></p>
        <hr></hr>
        
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default P4