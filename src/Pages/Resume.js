import React from 'react'
import docu from '../Documents/resumii.pdf'
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

function Resume() {

  return (
    <div>
      <div class='clickButtons'>
      <h1 style={{
          display: 'flex',
          justifyContent: 'center',
        color: 'yellow', marginBottom: '20px',
      }}
      >Visit my profiles</h1>
        
        <div className='profilesContainer'>

        <a href="https://leetcode.com/u/chirayubatra1104/" target="_blank" class='capsule'> <SiLeetcode className='iconSize' color='white' class='sizeInc' /> <p>LeetCode</p> </a>
        <a href="https://www.geeksforgeeks.org/user/chirayubatra1104/" target="_blank" class='capsule'> <SiGeeksforgeeks className='iconSize' color='white' class='sizeInc' /> <p>GeeksForGeeks</p> </a>
        <a href="https://www.hackerrank.com/profile/chirayubatra1104" target="_blank" class='capsule'> <FaHackerrank className='iconSize' color='white' class='sizeInc' /> <p>HackerRank</p> </a>

    
        </div>
      </div>
      
      <iframe 
        src={docu} 
        style={{ border: 'none', width: '100%', height: '150vh' }}
        allowFullScreen 
        title="Resume"
      />
    </div>
  )
}

export default Resume
