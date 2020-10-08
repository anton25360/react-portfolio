import React, { Component } from 'react'
import './About.css'

import fr from '../res/fr.png'
import gb from '../res/gb.png'

export class About extends Component {
    render() {
        return (
            <div className='aboutContainer'>
                <div id='aboutTitleContainer'><h1 className='aboutTitle'>About Me</h1></div>
                <p className=' aboutText'>
                    I am a Full Stack Web & Mobile Developer from Bath, UK.
                    I have experience with various front and back end languages, such as Node, React, React Native, and Java, and an exceptional eye for well-written code and clean UIs.<br/><br/>
                    I studied software development at Mayden Academy (<a id='aboutLink' href='https://mayden.academy/mayden-academy-ranked-in-the-top-10-best-coding-bootcamps-in-the-world/'>Ranked #6 Best Coding Bootcamp in the world</a>), and I enjoy learning new languages and frameworks independently, 
                    such as Go and VueJS, as well as putting my skills to the test with various projects .<br/><br/>
                    When I'm not programming, you'll find me walking my dog, having fun with my CrossFit team mates, 
                    tinkering with one of many Raspberry Pi's, or reading a good fantasy novel.</p>
            </div>
        )
    }
}

export default About