import React,{useState} from "react";
function Porduct({i}){
    const [count, setCount] = useState(0);
    return (<div  >
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={i.thumbnail} className='pic'></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{i.title}</h3>
                <h6 className="card-title"><i>${i.price}</i></h6>
                <p className="card-text">{i.description}</p>
                <p className="card-title">Brand:{i.brand}&nbsp;&nbsp; Catergory: {i.category} &nbsp;&nbsp; Rating: {i.rating} &nbsp;&nbsp; Stock: {i.stock} </p>
                <hr></hr>
                
                <button onClick={()=>( setCount(count+1))} className="ad">+</button>&ensp;<b>{count}</b>&ensp;<button className="ad" onClick={()=>{ if(count!==0) setCount(count-1)}}>-</button>
               <strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
               &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
               &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
               &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
               &ensp;&ensp;&ensp;&ensp;<i>${i.price * count}</i></strong>
                
               </div>
            </div>
            <hr></hr>
          </div>
        </div>
        </div>);
}
export {Porduct}