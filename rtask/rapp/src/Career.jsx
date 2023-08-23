import React from 'react'
import Ele from './Ele'

function Career() {
  return (
    <div>
          <img src='./image/career.webp'></img><hr></hr>
       <div className='bod'>
     <Ele 
     imglink="./image/ca1.webp"
     head="Top Skills Required to Become a Digital Marketer" 
     para="Digital marketing is one of the most dynamic industries that has transformed how businesses connect"
     date="17-Aug-2023"></Ele>

<Ele 
     imglink="./image/ca2.webp"
     head="Career Opportunities in Digital Marketing | Digital Marketing Career" 
     para="As we move forward in today’s digital age, the need for businesses to engage with"
     date="16-Aug-2023"></Ele>

<Ele 
     imglink="./image/ca3.webp"
     head="10 Best Data Science Online Courses for Beginners | 2023" 
     para="In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most"
     date="16-Aug-2023"></Ele>

<Ele 
     imglink="./image/ca4.webp"
     head="How to Become a UI/UX Designer: 10 Steps to Master the Craft" 
     para="Have you ever wondered what it takes to create captivating designs that leave users delighted"
     date="11-Aug-2023"></Ele>
</div>
    </div>
  )
}

export default Career