import React, { Component } from 'react'
import './About.css'

export class About extends Component {
    render() {
        return (
            <div className='aboutContainer'>
                <p className='aboutTitle'>About Me</p>
                <p className=' aboutText'>I am a bilingual (French & English) Full Stack Web Developer from Bath, UK. Thanks to my time at Mayden Academy (as opposed to University) I have experience with many different front and back end languages, and an exeptional eye for well-written code and clean UIs. <br/><br/> I always enjoy putting my skills to the test with various different side-projects (Which you can see below), as well as independantly learn new languages (Such as Java and Go).<br/><br/>When I'm not programming, you'll find me walking my dog, tinkering with one of my many Raspberry Pi's, or reading a good Fantasy novel.</p>
            </div>
        )
    }
}

export default About
