import React from 'react'
import logo from '../Images/a.jpg'
function About() {
    return (
        <div class='aboutFlex'>
            <div>
                <h1 style={{
                     marginLeft: '20%',
                     marginTop: '20%',
                     color: 'yellow',}}
                     >About Me</h1>
                     <div class='line'></div>
                    <h4 className='aboutText'>
                    I am a Student at Vellore Institute Of Technology, Pursuing 4th year B.tech in Computer Science and Engineering.
                    <br /><br/>
                    Currently looking for finding new opportunities in the industry related to software development.
                    <br /><br/>
                    Currently learning Generative AI and enhancing my skills of development.
                    <br /><br/>
                    Apart from coding, my hobbies are:
                    <br /><br/>
                    &emsp;⭐Listening Music <br/>
                    &emsp;⭐Playing Basketball <br />
                    &emsp;⭐In touch with new evolving softwares  <br />
                    {/* "Be consistent and keep learning always!" */}
                </h4>
            </div>
            <img src={logo} style={{ 
                marginRight: '200px', height: '300px',
                marginTop: '200px',
                }} alt="Logo" />;
        </div>
    )
}

export default About
