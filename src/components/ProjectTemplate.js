import React, { Component } from 'react'
import './ProjectTemplate.css'


export class ProjectTemplate extends Component {

    render() {
        return (
            <div className='PTcontainer'>
                <img className='PTimage' src={this.props.img} alt='app showcase' /><br />
                <div className='PTtext'>
                    <p className='PTtitle'>{this.props.title}</p>
                    <p className='PTdesc'>{this.props.description}</p>
                </div>
                <br />
                <div className='PTbuttons'>
                    <a href={this.props.source} className='PTbtn'>View Source  <i class="fas fa-code-branch"></i></a>
                    <a href={this.props.demo} className='PTbtn'>View Demo  <i class="fas fa-globe-americas"></i></a>
                    <p className={`badgeFormat PTtag ${this.props.class}`}>{this.props.tag}</p>
                </div>

            </div>
        )
    }
}

export default ProjectTemplate
