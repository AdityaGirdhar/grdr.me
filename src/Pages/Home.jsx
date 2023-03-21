import { React, useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll'
import landingImage from '../Assets/landing.jpeg'
import landingUp from '../Assets/landing-up.png'
import arrow from '../Assets/arrow.svg'
import projectDashcab from '../Assets/project-dashcab.png'
import projectEsmt from '../Assets/project-esmt.png'
import projectTedx from '../Assets/project-tedx.png'
import projectInduction from '../Assets/project-induction.png'
import projectTodo from '../Assets/project-todo.png'
import projectPassword from '../Assets/project-password.png'
import projectGsh from '../Assets/project-gsh.png'
import '../Styles/Home.css'


function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="landing">
      <img className="img-back" src={landingImage} data-aos='fade-up'/>
      <h1 className='landing-text'>ADITYA GIRDHAR</h1>
      <div class="marquee">
        <div class="track">
          <h1 className='landing-text hollow'>STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. STUDENT. DEVELOPER. DESIGNER. </h1>
        </div>
      </div>
      
      <img className="img-front" src={landingUp} data-aos='fade-up'/>
      <Link  to="anchor" spy={true} smooth={true} offset={0}>
      <div className='top-text'>
        <img className='arrow' src={arrow} alt="arrow" />
      </div>
      </Link>
      </div>

      <div id='construction' className="construction">i'm a computer science and engineering sophomore at iiit delhi. always open for new experiences!</div>

      <h2>get in touch</h2>
      <div className="underline-one"></div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/adityagirdhar/">
          <div className="social-link">
            <img src="https://icon-library.com/images/linkedin-black-icon/linkedin-black-icon-28.jpg" alt="linkedin" />
            &nbsp;/adityagirdhar
          </div>
        </a>
        <a href="https://www.instagram.com/aditya.girdhar/">
          <div className="social-link">
            <img src="https://freeiconshop.com/wp-content/uploads/edd/instagram-new-outline.png" alt="instagram" />
            &nbsp;/aditya.girdhar
          </div>
        </a>
        <a href="https://github.com/adityagirdhar/">
          <div className="social-link">
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="github" />
            &nbsp;/AdityaGirdhar
          </div>
        </a>
        
      </div>

      <div id="anchor"> &nbsp; </div>

      <div id='projects' className="projects">
        <h2>projects</h2>
        <div className="underline-one"></div>
        <div className="cards-section">
          <div className="card" data-aos="fade-up">
            <div>
              <img src={projectDashcab} alt="" />
              <h3 className='name'>DashCab (work-in-progress)</h3>
              <h4 className='designation'>Django/Node.js, React.js, MySQL</h4>
              <h4 className='description'>A full-stack cab hailing application. Scheduled to be completed by April, 2023. </h4>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div>
              <img src={projectEsmt} alt="" />
              <h3 className='name'>E-Summit'23 Official Website</h3>
              <h4 className='designation'>React.js, Three.js, Design</h4>
              <h4 className='description'>This website was designed and developed for E-summit'23: IIIT Delhi's flagship entrepreneurship summit.</h4>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div>
              <img src={projectTedx} alt="" />
              <h3 className='name'>TEDxIIITD'23 Official Website</h3>
              <h4 className='designation'>Vue.js, Three.js, Design</h4>
              <h4 className='description'>This website was designed and developed for the 2023 edition of TEDxIIITD. Includes an end-to-end payment gateway.</h4>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div>
              <img src={projectInduction} alt="" />
              <h3 className='name'>Induction'22 Official Website</h3>
              <h4 className='designation'>React.js, Design</h4>
              <h4 className='description'>This website was designed to royally welcome the Class of 2026 to IIIT-Delhi</h4>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div>
              <img src='https://github.com/AdityaGirdhar/Tank-Stars/blob/main/assets/splash.png?raw=true' alt="" />
              <h3 className='name'>Tank Stars Clone</h3>
              <h4 className='designation'>Java, libGDX</h4>
              <h4 className='description'>A watered-down clone of the popular mobile-game Tank Stars, developed in Java and libGDX with a strict, object-oriented design.</h4>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div>
              <img src={projectTodo} alt="" style={{border: '1px solid grey'}}/>
              <h3 className='name'>To-Do App!</h3>
              <h4 className='designation'>React.js, Bootstrap v5</h4>
              <h4 className='description'>A nifty To-Do App for keeping track of daily chores, developed using React and styled using Bootstrap</h4>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div>
              <img src={projectPassword} alt="" />
              <h3 className='name'>Password Generator</h3>
              <h4 className='designation'>JavaScript, HTML5/CSS3</h4>
              <h4 className='description'>A delightful Password Generator to quickly generate random passwords for use all throughout the internet. Written in JavaScript and HTML/CSS. First project :)</h4>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div>
              <img src={projectGsh} alt="" />
              <h3 className='name'>The Girdhar Shell (gsh)</h3>
              <h4 className='designation'>C, Unix, Operating Systems</h4>
              <h4 className='description'>The Girdhar Shell is an incredibly (un)sophisticated unix-based shell written using C and unix system-calls.</h4>
            </div>
          </div>

        </div>
      </div>

      <h2><span className='strike'>not</span> the end.</h2>
    </>
  )
}

export default Home