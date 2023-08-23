import React,{useContext,useState} from 'react'
import { PriceContext } from './PriceContext'

function Prod() {
    const{cost}=useContext(PriceContext);
    const{cost1}=useContext(PriceContext);
    const{cost2}=useContext(PriceContext);
    const{cost3}=useContext(PriceContext);
    const{cost4}=useContext(PriceContext);
  return (
    <><div className='head'>
      <br></br> 
    <h1 ><i className='cpg'>Checkout Page  </i>  
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <i className='cpg'> Total:{cost+cost1+cost2+cost3+cost4}</i></h1>
        <br></br>
      </div></>
  )
}

export default Prod