import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainTitle from '../components/generics/MainTitle'
import NewsandArticles from '../components/NewsandArticles'
import Newsletter from '../components/Newsletter'



const News = () => {
  return (
    <div className="wrapper">
        <Header />
      <main>
      <MainTitle menu1="Home" menu2="News" title="Article & News"/>
      <NewsandArticles/>
      <Newsletter/>

    
      </main>
      <Footer />
    </div>
  )
}

export default News