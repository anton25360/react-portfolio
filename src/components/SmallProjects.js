import React, { Component } from 'react'
import './SmallProjects.css'

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
import pi from '../res/pi.png'
import budgetCalculator from '../res/budgetCalculator.png'

export class SmallProjects extends Component {
    render() {
        return (
            <div className='projTarget'>
            <p id='projTitle'><span id='slash'>/</span>projects</p>
            <div className='projectContainer'>
                {/* angular */}
                <ProjectTemplate title='Budget Calculator' description='Budget Calculator web app.' tag='Angular' class='badge-angular' img={budgetCalculator} source='https://github.com/anton25360/BudgetCalculator' demo='https://anton25360.github.io/BudgetCalculator/'/>
                 {/* python */}
                 <ProjectTemplate title='Covid-19 Tracker' description='Displays data through CLI & LEDs.' tag='Python' class='badge-python' img={pi} source='https://github.com/anton25360/python-covidTracker' demo='https://github.com/anton25360/python-covidTracker#output'/>
                {/* react */}
                <ProjectTemplate title='SynergyOS' description='Browser-based OS (with its own apps).' tag='ReactJS' class='badge-react' img={synergy} source='https://github.com/Mayden-Academy/2019-dec-synergyOs/' demo='https://synergyos.now.sh/'/>
                <ProjectTemplate title='Wonders' description='7 Wonders of the World travel guide.' tag='ReactJS' class='badge-react' img={wonders} source='https://github.com/anton25360/react-wonders' demo='https://anton25360.github.io/react-wonders/'/>
                <ProjectTemplate title='Crypto to Freddo' description='Cryptocurrency to Freddo converter.' tag='ReactJS' class='badge-react' img={freddo} source='https://github.com/anton25360/react-bitcoin2chocolate/' demo='https://anton25360.github.io/react-bitcoin2chocolate/'/>
                {/* java */}
                <ProjectTemplate title='Cascade' description='Android To-Do App (with Firebase).' tag='Java' class='badge-java' img={cascade} source='https://github.com/anton25360/Cascade-android' demo='https://bit.ly/cascadego'/>
                {/* ts */}
                <ProjectTemplate title='Glass' description='Cocktail guide (gets data from API).' tag='TypeScript' class='badge-ts' img={glass} source='https://github.com/anton25360/Glass/' demo='https://anton25360.github.io/Glass/app'/>
                {/* js */}
                <ProjectTemplate title='Cobra Paint' description='Microsoft Paint Clone.' tag='JavaScript' class='badge-js' img={paint} source='https://github.com/anton25360/Cobra-Paint-UI/' demo='https://anton25360.github.io/Cobra-Paint-UI/'/>
                <ProjectTemplate title='Auth' description='Firebase authentication service.' tag='JavaScript' class='badge-js' img={auth} source='https://github.com/anton25360/js-auth/' demo='https://anton25360.github.io/js-auth/index.html'/>
                <ProjectTemplate title='Planets of the Solar System' description='SVG solar system diagram.' tag='JavaScript' class='badge-js' img={planet} source='https://github.com/anton25360/Solar-sys' demo='https://anton25360.github.io/Solar-sys/'/>
                <ProjectTemplate title='Marble' description='Gradient text previewer.' tag='JavaScript' class='badge-js' img={marble} source='https://github.com/anton25360/Marble' demo='https://anton25360.github.io/Marble/'/>
                <ProjectTemplate title='Coin' description='Simple heads or tails web app.' tag='JavaScript' class='badge-js' img={coin} source='https://github.com/anton25360/Heads-Tails' demo='https://anton25360.github.io/Heads-Tails/'/>
                {/* php */}
                <ProjectTemplate title='Medal Collection' description='Simple MySQL medal collection.' tag='PHP' class='badge-php' img={medal} source='https://github.com/anton25360/collection-medals' demo='https://dev.maydenacademy.co.uk/students/2019/aug/anton/collection-medals/'/>
                <ProjectTemplate title='Bread and Ifits' description='Recipe finder (based on input ingredients).' tag='PHP' class='badge-php' img={bread} source='https://github.com/Mayden-Academy/2019-Aug-Bread-and-ifit-cobras' demo='http://dev.maydenacademy.co.uk/projects/2019Aug/2019-aug-bread-and-ifit/app/'/>
            

            </div>
            </div>
        )
    }
}

export default SmallProjects
