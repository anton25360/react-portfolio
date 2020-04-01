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
                <ProjectTemplate title='SynergyOS' description='Browser-based OS.' tag='ReactJS' class='badge-react'/>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World PWA.' tag='ReactJS' class='badge-react'/>
                <ProjectTemplate title='Crypto to Freddo' description='Cryptocurrency to Freddo converter.' tag='ReactJS' class='badge-react'/>

                {/* android */}
                <ProjectTemplate title='Cascade' description='Android To-Do App.' tag='Java' class='badge-java'/>

                {/* go */}
                {/* cli podcast downloader */}

                {/* python */}
                {/* covid19 LED tracker */}

                {/* ts */}
                <ProjectTemplate title='Glass' description='Cocktail guide (From API).' tag='TypeScript' class='badge-ts'/>

                {/* js */}
                <ProjectTemplate title='Cobra Paint' description='Microsoft Paint Clone.' tag='JavaScript' class='badge-js'/>
                <ProjectTemplate title='Auth' description='Firebase authentication service.' tag='JavaScript' class='badge-js'/>
                <ProjectTemplate title='Planets of the Solar System' description='SVG solar system diagram.' tag='JavaScript' class='badge-js'/>
                <ProjectTemplate title='Marble' description='Gradient text previewer.' tag='JavaScript' class='badge-js'/>
                <ProjectTemplate title='Coin' description='Simple heads or tails web app.' tag='JavaScript' class='badge-js'/>
                
                {/* php */}
                <ProjectTemplate title='Medal Collection' description='Simple MySQL medal collection.' tag='PHP' class='badge-php'/>
                <ProjectTemplate title='Bread and Ifits' description='Recipe finder (based on ingredients).' tag='PHP' class='badge-php'/>
                {/* home dashboard */}

            </div>
            </div>
        )
    }
}

export default Projects
