import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Img from '../Images/g.png'

import React from 'react'

function Home() {
  var ReactRotatingText = require('react-rotating-text');

  return (
    <div >
      <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
      <h1 style={{
        // display: 'flex',
        // justifyContent: 'center',
        marginLeft: '10%', marginTop: '10%',
        color: 'silver', marginBottom: '20px',
        size: '20%', fontSize: '300%'
      }}
      >Hello! 👋 <br /> I'm Chirayu Batra <br />
      </h1>
      <img src={Img} style={{ width: '30%',
          backgroundColor: 'transparent',
           marginLeft: '20%',
           marginTop: '10%', opacity: '0.8'
           }} alt="Transparent" />
      </div>


      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <h1 style={{
          color: 'white',
          marginLeft: '10%', fontSize: '240%'
        }}  >  I LIKE
        </h1>

        <h1 style={{
          color: 'orange',
          marginLeft: '1%', fontSize: '220%'
        }}  >
          <ReactRotatingText class='react-rotating-text-cursor' items={['MERN stack developement', 'Generative AI', 'Web App Development', 'Android Development']} />
        </h1>
         <div style={{ backgroundColor: 'transparent', padding: '20px' }}></div>
      </div>

      <h1 style={{
        // display: 'flex',
        // justifyContent: 'center',
        marginLeft: '10%', marginTop: '10%',
        color: 'yellow', marginBottom: '5%',
        size: '20%', fontSize: '300%'
      }}
      ><u>My Introduction:</u>
      </h1>
     
      <h3 style={{
        marginLeft: '10%',
        color: 'white', 
        size: '10%', fontSize: '152%',
        fontFamily: 'fantasy'
      }}>
        🤟 Currently a student at Vellore Institute of Technology, Chennai. <br/>
        🤟 Passionate about programming and have been exploring various technologies.<br/>
        🤟 Proficient in classics like Python, C++ and Java.<br/>
        🤟 Interested in learning whole variety of tech<br/>

      </h3>


      <h1 style={{
        // display: 'flex',
        // justifyContent: 'center',
        marginLeft: '10%', marginTop: '10%',
        color: 'yellow', marginBottom: '5%',
        size: '20%', fontSize: '300%'
      }}
      ><u>Let's Connect:</u>
      </h1>

      <div className='connectContainer'>

        <a href="https://leetcode.com/u/chirayubatra1104/" target="_blank" >  <FaLinkedin className='iconSize' color='white' class='sizeLinkedIn' /></a>
        <a href="https://github.com/ChirayuBatra99" target="_blank" >    <FaGithub className='iconSize' color='white' class='sizeLinkedIn' /></a>
        <a target="_blank" >    <SiGmail className='iconSize' color='white' class='sizeLinkedIn' /></a>
      </div>
    </div>
  )
}

export default Home
