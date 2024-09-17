import React from 'react'


import Img from '../../Images/b.png'
import { FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import Empty from '../../Images/projectImages/empty.png'
import Ott from '../../Images/projectImages/ott.png'



export default function AdvancedProjects() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
        <div>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'yellow', marginBottom: '20px',
            }}
            ><u>MERN Stack </u></h1>
           

            <div class='projectImages'>
                
                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={Img} alt="image not found"/>
                <h3 class='projectDescription'>E-Commerce Full Stack</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/E-commerce-platform-MERN")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={Ott} alt="image not found"/>
                <h3 class='projectDescription'>Prime Stream (OTT Platform)</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/Prime-Stream-OTT-MERN")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={Empty} alt="image not found"/>
                <p class='projectDescription'></p>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                {/* <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div> */}
                <p class='projectDescription'></p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                {/* <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div> */}
                <p class='projectDescription'></p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={Empty} alt="image not found"/>
                <p class='projectDescription'></p>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                {/* <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div> */}
                <p class='projectDescription'></p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                {/* <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div> */}
                <p class='projectDescription'></p>
                </div>
                </div>
            </div>

            
        
         


            



        </div>


    
  )
}
