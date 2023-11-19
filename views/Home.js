import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import AboutSection from '../components/AboutSection'
import PartnerSection from '../components/PartnerSection'
import FeaturesSection from '../components/FeaturesSection'
import OurServices from '../components/OurServices'
import ChooseUs from '../components/ChooseUs'
import ProjectCaseStudies from '../components/ProjectCaseStudies'
import Team from '../components/Team'
import Newsletter from '../components/Newsletter'
import ArticleNews from '../components/ArticleNews'

const Home = () => {
  return (
    <div className="wrapper">
        <Header/>
      <main>
      <Showcase />
      <PartnerSection/>
      <FeaturesSection/>
      <AboutSection/>
      <OurServices/>
      <ChooseUs/>
      <ProjectCaseStudies/>
      <Team/>
      <ArticleNews/>
      <Newsletter/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home