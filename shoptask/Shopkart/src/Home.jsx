import React, { useState } from 'react'

function Home(props) {
    const[isClicked,setState]=useState(true);
    const[cnt,setCount]=useState(0);
    const but=()=>{
        var count=0;
        if(isClicked==true){
            setState(false);
            setCount(cnt + 1);
        }
        else{
            setState(true);
            setCount(cnt - 1);
        }
         
    }



  return (
    <>
    <div class="card">
       
        <div class="pricecard">
            <p class="qty">Qty:  {cnt}</p>
            <hr></hr>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
           <div class="prodname">
            <br></br>
            <h3>{props.name}</h3><br></br>
            <b><p><span class="ops">{props.ops}</span> {props.price}</p></b>
           
           </div><br></br>
           {isClicked ? <button onClick={()=>but()}>Add to Cart</button> : <button onClick={()=>but()} >Remove from Cart</button>}
           
        </div>        
    </div>
    </>
  )
}

export default Home