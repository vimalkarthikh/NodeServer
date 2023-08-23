import React,{createContext,useContext,useState} from "react";

const PriceContext=createContext();

function PriceProvider({children}){
    const [cost,setCost]=useState(549);
    const [cost1,setCost1]=useState(899);
    const [cost2,setCost2]=useState(1249);
    const [cost3,setCost3]=useState(280);
    const [cost4,setCost4]=useState(499);
    const[count,setCount]=useState(0);

    return(
        <PriceContext.Provider value={{cost,setCost,count,setCount,cost1,setCost1,cost2,setCost2,cost3,setCost3,cost4,setCost4}}>
            {children}
        </PriceContext.Provider>
    )
}
export{PriceContext,PriceProvider};