import React, {createContext,useContext,useState} from "react";

const CarContext=createContext();

function Brand({children}){
    const [cnt,setCnt]=useState("Ireland");
    const [nm,setNm]=useState("Volvo");
    return(
        <CarContext.Provider value={{cnt,setCnt,nm,setNm}}>
            {children}

        </CarContext.Provider>
    )
}

export{CarContext,Brand}