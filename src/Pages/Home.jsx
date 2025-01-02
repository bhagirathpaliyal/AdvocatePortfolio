import React from 'react'
import HAboutSec from '../components/HAboutSec'
import HeroSec from '../components/HeroSec'
import HAchievementSec from '../components/HAchievementSec'
import Header from '../components/header/Header'
import Logo from '../components/header/Logo'
import ContactForm from '../components/ContactForm'
import Service from '../components/Service'
import Professionals from '../components/professionals'

const Home = ({ scrollToSection }) => {
 
  return (
    <div >
      <div className='Home text-[#fff] flex flex-col items-center bg-gradient-to-r from-[#08132f] to-[#0c2b59] p-[40px]'>
        <Logo/>
        <h1 className='font-thin'>Ghuman law associates</h1>
      </div>
      <Header scrollToSection={scrollToSection}/>
    <HeroSec/>
    <HAboutSec/>
    <Service/>
    <Professionals/>
    <HAchievementSec/>
    <ContactForm/>
   
    </div>
  )
}

export default Home