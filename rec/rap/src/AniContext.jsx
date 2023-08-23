import React,{createContext,useContext,useState} from "react";

const AniContext=createContext();

function AniProvider({children}){
    const[sound,setSound]=useState("Vrumm")

    return(
        <AniContext.Provider value={{sound,setSound}}>
            {children}
        </AniContext.Provider>
    )
}
export { AniContext,AniProvider }