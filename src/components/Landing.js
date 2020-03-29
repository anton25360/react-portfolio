import React, { Component } from 'react'
import './Landing.css'

export class Landing extends Component {
    render() {
        return (
            <div className='landingContainer'>
                <div className='landingTextContainer'>
                    <h1 className='landingTextGreeting'>Hi, I'm Anton.</h1>
                    <p className='landingTextSub'>I'm a Full Stack Web Developer looking for a new challenge.</p><br/><br/>
                    <button className='landingTextBtn'>View My Work</button>
                </div>
            </div>
        )
    }
}

export default Landing
