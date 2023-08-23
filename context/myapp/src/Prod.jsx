import React,{createContext,useContext,useState} from "react";

const PriceCont=createContext();
function PriceProvider({children}){
const [p1,setP1]=useState(549);
const [p2,setP2]=useState(899);
const [p3,setP3]=useState(1249);
const [p4,setP4]=useState(280);
const [p5,setP5]=useState(499);
const [qt,setQt]=useState(1);

<PriceProvider value={{p1,setP1,p2,setP2,p3,setP3,p4,setP4,p5,setP5,qt,setQt}}>
    {children}
</PriceProvider>
}
export{PriceCont,PriceProvider}