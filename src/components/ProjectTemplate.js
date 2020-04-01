import React, { Component } from 'react'
import './ProjectTemplate.css'

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


export class ProjectTemplate extends Component {

    selectImage = (input) => {
        switch (input) {
            case 'Crypto to Freddo':
                return freddo;
            case 'Cascade':
                return cascade;
            case 'Glass':
                return glass;
            case 'Wonders':
                return wonders;

            case 'SynergyOS':
                return synergy;
            case 'Coin':
                return coin;
            case 'Cobra Paint':
                return paint;
            case 'Auth':
                return auth;
            case 'Planets of the Solar System':
                return planet;
            case 'Marble':
                return marble;
            case 'Medal Collection':
                return medal;
            case 'Bread and Ifits':
                return bread;
            default:
                return coin;
        }
    }

    render() {
        return (
            <div className='PTcontainer'>
                <img className='PTimage' src={this.selectImage(this.props.title)} alt='app showcase' /><br />
                <div className='PTtext'>
                    <p className='PTtitle'>{this.props.title}</p>
                    <p className='PTdesc'>{this.props.description}</p>
                </div>
                <br />
                <div className='PTbuttons'>
                    <button className='PTbtn'>View Source  <i class="fas fa-code-branch"></i></button>
                    <button className='PTbtn'>View Demo  <i class="fas fa-globe-americas"></i></button>
                    <p className={`badgeFormat PTtag ${this.props.class}`}>{this.props.tag}</p>
                </div>

            </div>
        )
    }
}

export default ProjectTemplate
