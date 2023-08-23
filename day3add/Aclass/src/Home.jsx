import React from 'react'

function Home() {
    const car=[{id:1,name:"volvo"},{id:2,name:"scania"},{id:3,name:"leyland"},{id:4,name:"tata"}];
  return (
    <div>hello
      <ul>
        {
          car.map((ele)=>(
            <li key={ele.id}>{ele.name} {ele}</li>
          ))
        }

      </ul>

    </div>
  )
}

export default Home