import React,{useContext} from 'react'
import { AniContext } from './AniContext'
function Chang() {
    const{setSound}=useContext(AniContext);

    const chan=(s)=>{
        setSound(s)
    }
  return (
    <button onClick={()=>chan("supraaaaa")}>Toyota</button>
  )
}

export default Chang