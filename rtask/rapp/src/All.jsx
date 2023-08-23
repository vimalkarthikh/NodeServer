import React from 'react'

import Ele from './Ele'
import './All.css'
import './Ele.css'

function All() {
  return (
    <div>
    
       <img src='./image/allp.webp'></img>
       <hr></hr>
       <div className='bod'>
     <Ele 
     imglink="./image/gv.png"
     head="Top 10 Best Automation Testing Tools in 2023" 
     para="Automation testing tools have really become a great and important factor in building efficient web"
     date="17-Aug-2023"></Ele>

<Ele 
     imglink="./image/gv.png"
     head="Top Skills Required to Become a Digital Marketer" 
     para="Digital marketing is one of the most dynamic industries that has transformed how businesses connect"
     date="16-Aug-2023"></Ele>

<Ele 
     imglink="./image/gv.png"
     head="Career Opportunities in Digital Marketing | Digital Marketing Career" 
     para="As we move forward in today's digital age, the need for businesses to engage with"
     date="16-Aug-2023"></Ele>

<Ele 
     imglink="./image/gv.png"
     head="UI/UX Project Showcase: UX-perience Elevated" 
     para="Are you a professional UI/UX designer who finds it hard to attract your clients or"
     date="11-Aug-2023"></Ele>
</div>
        
    </div>
  )
}

export default All