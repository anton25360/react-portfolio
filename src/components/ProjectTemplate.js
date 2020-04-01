import React, { Component } from 'react'
import './ProjectTemplate.css'

//icons (48px)
import react from '../res/react.png'
import android from '../res/android.png'
import go from '../res/go.png'
import python from '../res/android.png'
import ts from '../res/ts.png'
import js from '../res/js.png'
import php from '../res/php.png'


//app screenshots
// import freddo from '../res/freddo.png'
import synergy from '../res/synergy.png'


export class ProjectTemplate extends Component {

    selectIcon=(input)=>{
        switch(input) {
            case 'react':
              return react
              break;
            case 'android':
              return android
              break;
            case 'go':
              return go
              break;
            case 'python':
              return python
              break;
            case 'ts':
              return ts
              break;
            case 'js':
              return js
              break;
            case 'php':
              return php
              break;
            default:
              return js
          }
    }

    render() {
        return (
            <div className='PTcontainer'>
                <img className='PTimage' src={synergy} alt='app showcase' /><br />
                <div className='PTtext'>
                    <p className='PTtitle'>{this.props.title}</p>
                    <p className='PTdesc'>{this.props.description}</p>
                </div>
                <br/>
                <div className='PTbuttons'>
                    <button className='PTbtn'>View Source  <i class="fas fa-code-branch"></i></button>
                    <button className='PTbtn'>View Demo  <i class="fas fa-globe-americas"></i></button>
                    <p className='badgeFormat badge-react'>ReactJS</p>
                </div>
                {/* <img className='PTicon' src={this.selectIcon(this.props.icon)} alt='icon' /> */}

            </div>
        )
    }
}

export default ProjectTemplate
