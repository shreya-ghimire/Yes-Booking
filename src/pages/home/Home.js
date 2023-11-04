import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Features from '../../components/features/Features'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'



function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Features />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Homes guest love</h1>
        <FeaturedProperty/>
        <MailList />
        <Footer />
        </div>
    </div>
  )
}

export default Home
