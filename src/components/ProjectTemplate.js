import React, { Component } from 'react'
import './ProjectTemplate.css'

import react from '../res/react.png'


export class ProjectTemplate extends Component {
    render() {
        return (
            <div className='PTcontainer'>
                <img className='PTimage' src='https://picsum.photos/350' /><br />
                <div className='PTtext'>
                    <p className='PTtitle'>{this.props.title}</p><br />
                    <p className='PTdesc'>{this.props.description}</p>
                </div>
                <img className='PTicon' src={react} />
            </div>
        )
    }
}

export default ProjectTemplate
