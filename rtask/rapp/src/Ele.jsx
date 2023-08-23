import React from 'react'
import './Ele.css'

function Ele(props) {
  return (
    <div>
        <div className='card'>
            <div className='content'>
                <img src={props.imglink} ></img>
                <hr></hr>
                
                <h3>{props.head}</h3>
                <br></br>
                <p>{props.para} <br />
                <a href='https://www.guvi.in/blog/' className='ele'>Read more</a></p>
                <br />
                <hr></hr>
               
                <span>{props.date} , No comments</span>

            </div>

        </div>
    </div>
  )
}

export default Ele