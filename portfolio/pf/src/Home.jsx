  import React from 'react'
import { Link } from 'react-router-dom'

  function Home() {
    return (
    <div className='hb'> 
    <div className='pn'>
    <p><h1>Hello! <br></br>I'm Vimal Karthik</h1><br/>Web Designer & Web Developer</p>
    
    &ensp;
    &ensp;
  <img src="./img/vkwog1.jpg" class="rounded float-right pp" alt="..."/>
  

  </div>
  
  <div className='abb'>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
    
  <Link to='/about' className='btn btn-success'>About me</Link>&ensp;&ensp;&ensp;&ensp;
  <a className='btn btn-success' href='./file/vk.pdf.pdf'> Download CV</a>
 
  </div>
      </div>
    )
  }

  export default Home