import React, { Component } from 'react'
import './Projects.css'

import ProjectTemplate from './ProjectTemplate'

//app screenshots
import freddo from '../res/freddo.png'
import cascade from '../res/cascade.png'
import glass from '../res/glass.png'
import wonders from '../res/wonders.png'

import synergy from '../res/synergy.png'
import coin from '../res/coin.png'
import paint from '../res/paint.png'
import auth from '../res/auth.png'
import planet from '../res/planet.png'
import marble from '../res/marble.png'
import medal from '../res/medal.png'
import bread from '../res/bread.png'

export class Projects extends Component {
    render() {
        return (
            <div className='projTarget'>
            <p id='projTitle'><span id='slash'>/</span>projects</p>
            <div className='projectContainer'>
                {/* react */}
                <ProjectTemplate title='SynergyOS' description='Browser-based OS (with apps and windows).' tag='ReactJS' class='badge-react' img={synergy}/>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World travel guide.' tag='ReactJS' class='badge-react' img={wonders}/>
                <ProjectTemplate title='Crypto to Freddo' description='Cryptocurrency to Freddo converter.' tag='ReactJS' class='badge-react' img={freddo}/>

                {/* java */}
                <ProjectTemplate title='Cascade' description='Android To-Do App (with Firebase).' tag='Java' class='badge-java' img={cascade}/>

                {/* go */}
                {/* cli podcast downloader */}

                {/* python */}
                {/* covid19 LED tracker */}

                {/* ts */}
                <ProjectTemplate title='Glass' description='Cocktail guide (gets data from API).' tag='TypeScript' class='badge-ts' img={glass}/>

                {/* js */}
                <ProjectTemplate title='Cobra Paint' description='Microsoft Paint Clone.' tag='JavaScript' class='badge-js' img={paint}/>
                <ProjectTemplate title='Auth' description='Firebase authentication service.' tag='JavaScript' class='badge-js' img={auth}/>
                <ProjectTemplate title='Planets of the Solar System' description='SVG solar system diagram.' tag='JavaScript' class='badge-js' img={planet}/>
                <ProjectTemplate title='Marble' description='Gradient text previewer.' tag='JavaScript' class='badge-js' img={marble}/>
                <ProjectTemplate title='Coin' description='Simple heads or tails web app.' tag='JavaScript' class='badge-js' img={coin}/>
                
                {/* php */}
                <ProjectTemplate title='Medal Collection' description='Simple MySQL medal collection.' tag='PHP' class='badge-php' img={medal}/>
                <ProjectTemplate title='Bread and Ifits' description='Recipe finder (based on available ingredients).' tag='PHP' class='badge-php' img={bread}/>
                {/* home dashboard */}

            </div>
            </div>
        )
    }
}

export default Projects
