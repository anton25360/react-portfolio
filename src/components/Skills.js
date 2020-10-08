import React, { Component } from 'react'
import './Skills.css'

export class Skills extends Component {
    render() {
        return (
            <div className='skillsContainer'>
                <div id='skillsTitleContainer'><h1 className='skillsTitle'>Skills</h1></div>
                <div className='skillsText'>
                    <p className='skillsIndicator'>Front End:</p>
                    <p className='badgeFormat badge-html'>HTML</p>
                    <p className='badgeFormat badge-css'>CSS</p>
                    <p className='badgeFormat badge-sass'>Sass</p>
                    <p className='badgeFormat badge-bootstrap'>Bootstrap</p>
                    <p className='badgeFormat badge-js'>JavaScript</p>
                    <p className='badgeFormat badge-ts'>TypeScript</p>
                    <p className='badgeFormat badge-react'>React</p>
                    <p className='badgeFormat badge-angular'>Angular</p>
                    <p className='badgeFormat badge-vue'>Vue</p>
                    <br/><br/>

                    <p className='skillsIndicator'>Back End:</p>
                    <p className='badgeFormat badge-firebase'>Firebase</p>
                    <p className='badgeFormat badge-java'>Java</p>
                    <p className='badgeFormat badge-php'>PHP</p>
                    <p className='badgeFormat badge-node'>NodeJS</p>
                    <p className='badgeFormat badge-python'>Python</p>
                    <br/><br/>

                    <p className='skillsIndicator'>Other:</p>
                    <p className='badgeFormat badge-git'>git / CLI</p>
                    <p className='badgeFormat badge-pwa'>PWA</p>
                    <p className='badgeFormat badge-api'>API</p>
                </div>
            </div>
        )
    }
}

export default Skills
