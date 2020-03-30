import React, { Component } from 'react'
import './Projects.css'

import ProjectTemplate from './ProjectTemplate'


export class Projects extends Component {
    render() {
        return (
            <div className='projectContainer'>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World PWA.' icon='react'/>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World PWA.' icon='react'/>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World PWA.' icon='react'/>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World PWA.' icon='react'/>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World PWA.' icon='react'/>
            </div>
        )
    }
}

export default Projects
