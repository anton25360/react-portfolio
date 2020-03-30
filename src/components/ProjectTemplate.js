import React, { Component } from 'react'
import './ProjectTemplate.css'

export class ProjectTemplate extends Component {
    render() {
        return (
            <div className='PTcontainer'>
                <img className='PTimage' src='https://picsum.photos/350'/><br/>
                <div className='PTtext'>
                    <p className='PTtitle'>{this.props.title}</p><br/>
                    <p className='PTdesc'>{this.props.description}</p>
                    {/* {this.props.name}<br/>{this.props.description} */}
                </div>
                {/* <p className='PTDesc'>{this.props.description}</p> */}
                <img className='PTicon' src='https://picsum.photos/42'/>
            </div>
        )
    }
}

export default ProjectTemplate
