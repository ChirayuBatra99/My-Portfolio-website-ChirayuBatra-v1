import React from 'react'
import { FaPython, FaJava, FaNodeJs, FaCss3Alt,FaGithub } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript, SiMacos, SiGooglecolab } from "react-icons/si";
// import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact } from '@fortawesome/free-brands-svg-icons';
import { VscVscode } from "react-icons/vsc";
import GitHubCalendar from 'react-github-calendar';


function Skills() {
  return (
    <div>
      <h1 style={{
          display: 'flex',
          justifyContent: 'center',
        color: 'yellow', marginBottom: '20px',
      }}
      >Technical Skills</h1>
      {/* <div class='line'></div> */}
      {/* <div class='picAndContainer'> */}
        <div className='bigContainerIcons'>
          <div className='smallContainerIcons3'>
            <div class='capsule'>    <TbBrandCpp className='iconSize' color='white' class='sizeInc' /><p>C++</p></div>
            <div class='capsule'>   <FaPython className='iconSize' color='white' class='sizeInc' /><p>Python</p></div>
            <div class='capsule'>   <FaJava className='iconSize' color='white' class='sizeInc' /><p>Java</p></div>

          </div>
          <div className='smallContainerIcons'>
          <div class='capsule'>  <RiReactjsFill className='iconSize' color='white' class='sizeInc' /><p>ReactJs</p></div>
          <div class='capsule'>  <FaNodeJs className='iconSize' color='white' class='sizeInc' /><p>NodeJS</p></div>
          <div class='capsule'>   <SiTypescript className='iconSize' color='white' class='sizeInc' /><p>TypeScript</p></div>
          <div class='capsule'>     <IoLogoJavascript className='iconSize' color='white' class='sizeInc' /><p>Javascript</p></div>
          <div class='capsule'>   <FaCss3Alt className='iconSize' color='white' class='sizeInc' /><p>CSS</p></div>
          </div>
          <div className='smallContainerIcons'>
          </div>
        </div>
        {/* <img style={{ height: '100px', width: '100px' }} src={Img} alt="Nopp" /> */}

      {/* </div> */}




      <h1 style={{
          display: 'flex',
          justifyContent: 'center',
        color: 'yellow', marginBottom: '20px',
      }}
      >Tools that I Use</h1>
      {/* <div class='line'></div> */}
      {/* <div class='picAndContainer'> */}
        <div className='bigContainerIcons'>
          <div className='smallContainerIcons3'>
            <div class='capsule'>    <SiMacos className='iconSize' color='white' class='sizeInc' /><p>Mac OS</p></div>
            <div class='capsule'>  <VscVscode className='iconSize' color='white' class='sizeInc' /><p>Visual Studio Code</p></div>
            <div class='capsule'>   <SiGooglecolab className='iconSize' color='white' class='sizeInc' /><p>Google Colab</p></div>
            <div class='capsule'>   <FaGithub className='iconSize' color='white' class='sizeInc' /><p>GitHub</p></div>

          </div>
        
          <div className='smallContainerIcons'>
          </div>
        </div>


        <h1 style={{
          display: 'flex',
          justifyContent: 'center',
        color: 'yellow', marginBottom: '20px',
      }}
      >Github contributions</h1>
        <GitHubCalendar style={{
          color: 'white',
          padding: '10%',
        }} username="ChirayuBatra99" />


    </div>
  )
}

export default Skills



