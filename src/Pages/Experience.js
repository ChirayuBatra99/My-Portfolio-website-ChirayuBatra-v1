import React from 'react'

function Experience() {
    return (
        <div className="experience-container">
            {/* <h1>My Experience</h1> */}
            <div className="experience-card">
                {/* <h2>Sifars</h2> */}

                <div className='rowFlexExperience'>
                <h1 className="company-url"><a href="https://www.sifars.com" target="_blank" rel="noopener noreferrer">Sifars</a></h1>
                <p className="duration">August 2023 - December 2023</p>
                </div>
                
                <div className="projects">
                    <h3>Projects:</h3>
                    <div className="project">
                        <h4>Call Recorder </h4>
                        <p>-- Full Stack software for a workspace to record calls between employees and organize, manage them
                        based upon roles.</p>
                        <p>--<strong> Tech Used:</strong> ReactJs, NodeJs, Express, MongoDB</p>
                    </div>
                    <div className="project">
                        <h4>Clockify Automation</h4>
                        <p>-- Full stack software to watch the time spent by employees on individual tasks and
                        projects, by fetching data from Clockify API. Deployed email cron jobs about reports of time spent.</p>
                        <p>--<strong> Tech Used:</strong> ReactJs, NodeJs, Express, MongoDB</p>
                    </div>
                    <div className="project">
                        <h4>Sifars' Website Build</h4>
                        <p>-- Contributed in replacing the company’s old website from Gatsby framework with newer
                        technologies.</p>
                        <p>--<strong> Tech Used:</strong>  TypeScript, StoryBook, Vitest, Emotion CSS.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience
