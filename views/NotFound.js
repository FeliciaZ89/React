import React from 'react'
import Footer from '../components/Footer'
import not from '../assets/images/notfound.jpg'
import { Link } from 'react-router-dom'

const  NotFound = () => {
  return (
<div className="wrapper">

      <main>
      <section className="notfound">
      <Link to="/" ><img src={not} alt="notfound" /></Link>
  

      </section>
   
       
      </main>
      <Footer/>
    </div>

    
  )
}

export default NotFound