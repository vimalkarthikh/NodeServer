import React,{createContext,useContext,useState} from "react";

const PriceCont=createContext();
function PriceProvider({children}){
    

    const[qt,setQt]=useState(1);
    <PriceProvider key={{qt,setQt}}>
        {children}
    </PriceProvider>
}
export{PriceCont,PriceProvider}