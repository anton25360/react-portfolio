import React, { Component } from 'react'
import './Projects.css'

import ProjectTemplate from './ProjectTemplate'


export class Projects extends Component {
    render() {
        return (
            <div className='projectContainer'>
                <ProjectTemplate title='Wonders' description='A PWA showing info on the 7 Wonders.' icon='react'/>
            </div>
        )
    }
}

export default Projects
