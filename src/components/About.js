import React, { Component } from 'react'
import './About.css'

import fr from '../res/fr.png'
import gb from '../res/gb.png'

export class About extends Component {
    render() {
        return (
            <div className='aboutContainer'>
                <p className='aboutTitle'><span id='slash'>/</span>about me</p>
                <p className=' aboutText'>
                    I am a bilingual <img className='aboutFlag' src={fr} alt='FR'/> <img className='aboutFlag' src={gb} alt='GB'/> Full Stack Web Developer from Bath, UK.
                    I have experience with various front and back end languages, such as Node, React, and Java, and an exceptional eye for well-written code and clean UIs.<br/><br/>
                    I studied software development at Mayden Academy, and I enjoy learning new languages and frameworks independently, 
                    such as Go and VueJS, as well as putting my skills to the test with side projects (which you can see below) .<br/><br/>
                    When I'm not programming, you'll find me walking my dog, having fun with my CrossFit team mates, 
                    tinkering with one of many Raspberry Pi's, or reading a good fantasy novel.</p>
            </div>
        )
    }
}

export default About