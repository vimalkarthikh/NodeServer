import React,{useContext,useState} from 'react'
import { PriceContext } from './PriceContext'
function P1() {
    const[count1,setCount1]=useState(0);
    const{setCost1}=useContext(PriceContext);
    const{cost1}=useContext(PriceContext);

    const cst=()=>{setCount1(count1+1);}
    const dec=()=>{if(count1!=0) setCount1(count1-1);}
    setCost1(count1*899);
  return (
    <>
    <div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">iPhone x</h5>
        <p class="card-text">SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...  </p>
        <p class="card-text">Brand: Apple &emsp;&emsp;&emsp;category: smartphones</p>
        <hr />
        <p class="card-text">Rating: 4.44 &emsp;Stock: 34
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <b><i>$ 899</i></b></p>
        <p className='but'><button onClick={cst} className='atc'>+</button><h6 className='ct'>{count1}</h6><button onClick={dec} className='atc'>-</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <h6>Prod cost is : {cost1}</h6></p>
        <hr></hr>
        
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default P1