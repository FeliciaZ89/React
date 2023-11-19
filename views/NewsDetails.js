import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainTitle from '../components/generics/MainTitle'
import ArticleDetails from '../components/ArticleDetails'


const NewsDetails = () => {
  return (
     <div className="wrapper">
    <Header/>
  <main>
    <MainTitle menu1="Home" menu2="News" title="News & Articles" />

    <ArticleDetails/>
    
  </main>
 
  <Footer/>
</div>
  )
}

export default NewsDetails