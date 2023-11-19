import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Forms from '../components/Forms'
import Contact from '../components/Contact'
import Map from '../components/Map'
import MainTitle from '../components/generics/MainTitle'

const Contacts = () => {
  return (
    <>
    <div className="wrapper">
    <Header/>
  <main>
  <MainTitle menu1="Home" menu2="Connect" title="Let's Connect"/>
  <Contact/>
  <Forms/>
  <Map/>
  </main>
  </div>
  <Footer/>
</>
  )
}

export default Contacts