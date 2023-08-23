import React from 'react'
import {useParams} from 'react-router-dom'

function Fsd() {
    const{car}=useParams();
    console.log(car);
    const brand={volvo:"Rugged Car",benz:"Comfort car", rr:"Luxuary Car"};
    console.log(brand);
    const check=brand[car] || "Car Not Found";
    console.log(check);
  return (
    <div><h1>FSD</h1>
        <h1>{car}</h1>
    <p>{check}</p></div>
  )
}

export default Fsd