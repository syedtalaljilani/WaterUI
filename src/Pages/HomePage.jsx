import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
const HomePage = () => {
  return (
    <div className={'bg-gradient-to-r from-cyan-500 to-blue-500 h-[100%] w-[100%] sm:w-[100%] font-Montserrat2'}>
       <Header/>
       <HeroSection/>
     </div>
  )
}

export default HomePage