import React, { Component } from 'react'
import './ProjectTemplate.css'

//icons
import react from '../res/react.png'

//app screenshots
// import freddo from '../res/freddo.png'
import synergy from '../res/synergy.png'


export class ProjectTemplate extends Component {
    render() {
        return (
            <div className='PTcontainer'>
                <img className='PTimage' src={synergy} alt='app showcase' /><br />
                <div className='PTtext'>
                    <p className='PTtitle'>{this.props.title}</p><br />
                    <p className='PTdesc'>{this.props.description}</p><br/>
                    <button className='PTbtn'>View Source</button>
                    <button className='PTbtn'>View Demo</button>
                    {/* <img className='PTicon' src={react} /> */}
                </div>
                <img className='PTicon' src={react} alt='icon' />
            </div>
        )
    }
}

export default ProjectTemplate
