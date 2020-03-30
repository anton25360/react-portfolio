import React, { Component } from 'react'
import './About.css'

import fr from '../res/fr.png'
import gb from '../res/gb.png'

export class About extends Component {
    render() {
        return (
            <div className='aboutContainer'>
                <p className='aboutTitle'><span id='slash'>/</span>about me</p>
                <p className=' aboutText'>I am a bilingual (<img className='aboutFlag' src={fr} alt='FR'/> & <img className='aboutFlag' src={gb} alt='GB'/>) Full Stack Web Developer from Bath, UK. Thanks to my time at Mayden Academy (as opposed to University) I have experience with many different front and back end languages, and an exeptional eye for well-written code and clean UIs. <br /><br /> I always enjoy putting my skills to the test with various different side projects (which you can see below), as well as independantly learning new languages (such as Java and Go).<br /><br />When I'm not programming, you'll find me walking my dog, having fun with my CrossFit team mates, tinkering with one of my many Raspberry Pi's, or reading a good Fantasy novel.</p>
            </div>
        )
    }
}

export default About