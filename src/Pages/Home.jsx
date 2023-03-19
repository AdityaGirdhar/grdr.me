import { React, useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import landingImage from '../Assets/landing.jpeg'
import landingUp from '../Assets/landing-up.png'
import '../Styles/Home.css'

function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <img className="img-back animate__animated animate__fadeInUp" src={landingImage}/>
      <h1 className='landing-text'>ADITYA GIRDHAR</h1>
      <div class="marquee">
        <div class="track">
          <h1 className='landing-text hollow'>STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. </h1>
        </div>
      </div>
      
      <img className="img-front animate__animated animate__fadeInUp" src={landingUp}/>
      <div className='top-text'>
        
      </div>
    </>
  )
}

export default Home