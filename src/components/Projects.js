import React, { Component } from 'react'
import './Projects.css'

import ProjectTemplate from './ProjectTemplate'

export class Projects extends Component {
    render() {
        return (
            <div className='projTarget'>
            <p id='projTitle'><span id='slash'>/</span>projects</p>
            <div className='projectContainer'>
                {/* react */}
                <ProjectTemplate title='SynergyOS' description='Browser-based OS.' icon='react'/>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World PWA.' icon='react'/>
                <ProjectTemplate title='Crypto to Freddo' description='Cryptocurrency to Freddo converter.' icon='react'/>

                {/* android */}
                <ProjectTemplate title='Cascade' description='Android To-Do App.' icon='android'/>

                {/* go */}
                {/* cli podcast downloader */}

                {/* python */}
                {/* covid19 LED tracker */}

                {/* ts */}
                <ProjectTemplate title='Glass' description='Cocktail guide (From API).' icon='ts'/>

                {/* js */}
                <ProjectTemplate title='Cobra Paint' description='Microsoft Paint Clone.' icon='js'/>
                <ProjectTemplate title='Auth' description='Firebase authentication service.' icon='js'/>
                <ProjectTemplate title='Planets of the Solar System' description='SVG solar system diagram.' icon='js'/>
                <ProjectTemplate title='Marble' description='Gradient text previewer.' icon='js'/>
                <ProjectTemplate title='Coin' description='Simple heads or tails web app.' icon='js'/>
                
                {/* php */}
                <ProjectTemplate title='Medal Collection' description='Simple MySQL medal collection.' icon='php'/>
                <ProjectTemplate title='Bread and Ifits' description='Recipe finder (based on ingredients).' icon='php'/>
                {/* home dashboard */}

            </div>
            </div>
        )
    }
}

export default Projects
