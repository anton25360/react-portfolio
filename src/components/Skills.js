import React, { Component } from 'react'
import './Skills.css'

export class Skills extends Component {
    render() {
        return (
            <div className='skillsContainer'>
                <p className='skillsTitle'>Skills</p>
                <div className='skillsText'>
                    <p className='badgeFormat badge-html'>HTML</p>
                    <p className='badgeFormat badge-css'>CSS</p>
                    <p className='badgeFormat badge-sass'>Sass</p>
                    <p className='badgeFormat badge-bootstrap'>Bootstrap</p>
                    {/* <br/> */}
                    <p className='badgeFormat badge-php'>PHP</p>
                    <p className='badgeFormat badge-js'>JavaScript</p>
                    <p className='badgeFormat badge-ts'>TypeScript</p>
                    <p className='badgeFormat badge-git'>git</p>

                    <br/>
                    <p className='badgeFormat badge-java'>Java</p>
                    <p className='badgeFormat badge-firebase'>Google Firebase</p>
                    <p className='badgeFormat badge-xml'>XML</p>
                    {/* <br/> */}
                    <p className='badgeFormat badge-react'>ReactJS</p>
                    <p className='badgeFormat badge-pwa'>PWA</p>
                    <p className='badgeFormat badge-node'>NodeJS</p>
                    {/* <br/> */}
                    <p className='badgeFormat badge-go'>Go</p>
                    <p className='badgeFormat badge-python'>Python</p>
                    {/* <p className='badgeFormat badge-git'>git</p> */}
                </div>
            </div>
        )
    }
}

export default Skills
