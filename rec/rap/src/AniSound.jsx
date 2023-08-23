import React,{ useContext }from 'react'
import { AniContext } from './AniContext'

function AniSound() {
    const{ sound } = useContext(AniContext);
  return (
    <div>AniSound is {sound}</div>
  )
}

export default AniSound