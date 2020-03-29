import React, { Component } from 'react'
import './Landing.css'

export class Landing extends Component {
    render() {
        return (
            <div className='landingContainer'>
                <div className='landingTextContainer'>
                    <h1 className='landingTextGreeting'>Hi, I'm Anton.</h1>
                    <p className='landingTextSub'>Full Stack Web Developer</p><br/><br/>
                    <button className='landingTextBtn'>View My Work</button>
                </div>
            </div>
        )
    }
}

export default Landing
