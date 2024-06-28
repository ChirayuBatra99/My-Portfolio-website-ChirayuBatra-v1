import React from 'react'
import Img from '../Images/b.png'
import { FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import RI from '../Images/projectImages/restaurantFrontend.png'
import Empty from '../Images/projectImages/empty.png'
import Library from '../Images/projectImages/Library.png'
import TicTacToe from '../Images/projectImages/TicTacToe.png'
import toDo from '../Images/projectImages/toDo.png'
import atsResume from '../Images/projectImages/atsResume.png'
import chatWithPDF from '../Images/projectImages/chatWithPDF.png'
import chatBotMemory from '../Images/projectImages/chatBotMemory.png'
import YTtranscriber from '../Images/projectImages/YTtranscriber.png'
import Trex from '../Images/projectImages/Trex.png'
import Snake from '../Images/projectImages/Snake.png'
import calci from '../Images/projectImages/calci.png'

function Project() {
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
                <img class='indiviadualProjectImage' src={RI} alt="image not found"/>
                <h3 class='projectDescription'>Restaurant Menu (frontend) </h3>
                <div  onClick={() => openInNewTab("https://github.com/ChirayuBatra99/Restaurant-Menu-App")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={Library} alt="image not found"/>
                <h3 class='projectDescription'>Library Book Collection</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/Library-Books-collection-MERN")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={TicTacToe} alt="image not found"/>
                <h3 class='projectDescription'>TicTacToe</h3>

                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/TicTacToe--ReactJS")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={toDo} alt="image not found"/>
                <h3 class='projectDescription'>To Do list App</h3>

                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/ToDo---Mern-stack")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>
            </div>

            <div class='projectImages'>
                
                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={Img} alt="image not found"/>
                <h3 class='projectDescription'>E-Commerce website</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/Restaurant-Menu-App")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
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

            
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'yellow', marginBottom: '20px',
            }}
            ><u>Generative AI</u></h1>


            <div class='projectImages'>    
                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={atsResume} alt="image not found"/>
                <h3 class='projectDescription'>ATS for resume</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/ATS-for-resume-using-gemini")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={chatWithPDF} alt="image not found"/>
                <h3 class='projectDescription'>Chat With PDF</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/PDF-langchain-using-Gemini")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={chatBotMemory} alt="image not found"/>
                <h3 class='projectDescription'>ChatBot with memory</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/ChatBot-with-history-LeonYtLearning")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={YTtranscriber} alt="image not found"/>
                <h3 class='projectDescription'>Youtube Video Transcriber</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/YT-transcriber-using-gemini-pro")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>
               
            </div>
           
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'yellow', marginBottom: '20px',
            }}
            ><u>HTML-CSS-JS</u></h1>

<div class='projectImages'>
                
                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={Trex} alt="image not found"/>
                <h3 class='projectDescription'>TRex Chrome Game</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/Dino-game-Chrome")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={Snake} alt="image not found"/>
                <h3 class='projectDescription'>Snake Game</h3>
                <div onClick={() => openInNewTab("")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
                <div class='iconSize2'>     <FaGithub  color='white' class='sizeInc2' /></div>
                <p class='projectDescription'>Source Code</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%'}}>
                <div class='iconSize2'>     <ImNewTab  color='white' class='sizeInc2'/></div>
                <p class='projectDescription'>Show Demo</p>
                </div>
                </div>

                <div class='indiviadualCellProject'>
                <img class='indiviadualProjectImage' src={calci} alt="image not found"/>
                <h3 class='projectDescription'>Calculator</h3>
                <div onClick={() => openInNewTab("https://github.com/ChirayuBatra99/Calculator-HTML-CSS-JS")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
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
                <div onClick={() => openInNewTab("")} style={{display: 'flex', flexDirection:'row', alignItems:'center', marginLeft:'10%', cursor:'pointer'}}>
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

export default Project
