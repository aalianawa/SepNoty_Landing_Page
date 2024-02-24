import React from 'react'
import Blog from '../components/Portfolio/Blogs/Blog'
import FooterSection from '../components/Portfolio/FooterSection'
import Items from '../components/Items/Items'
import SearchH from '../components/SearchHeading/SearchH'
import HeroSection from '../components/HeroSection/HeroSection'
import MyPortfolio from '../components/MyPortfolio/Portfolio'
import CaseStudy from '../components/CaseStudy/CaseStudy'


const Portfolio = () => {
  return (
    <>
    <SearchH/>
    <Items/>
    <Blog/>

    <FooterSection/>
    <HeroSection/>
    <MyPortfolio/>
    <CaseStudy/>
   
    </>
  )
}

export default  Portfolio