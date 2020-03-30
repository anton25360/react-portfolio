import React, { Component } from 'react'
import './Landing.css'

export class Landing extends Component {

    scroll=(input)=>{
        document.querySelector(input).scrollIntoView({ 
            behavior: 'smooth' 
          });
        
    }
    
    render() {
        return (
            <div className='landingContainer'>
                <div className='landingTextContainer'>
                    <h1 className='landingTextGreeting'>Hi, I'm Anton.</h1>
                    <p className='landingTextSub'>I'm a Full Stack Web Developer looking for a new challenge.</p><br/><br/>
                    <button className='landingTextBtn' onClick={()=> this.scroll('.projTarget')}>View My Work</button>
                    <button className='landingTextBtn' onClick={()=> this.scroll('.contactContainer')}>Get In Touch</button>
                </div>
            </div>
        )
    }
}

export default Landing
