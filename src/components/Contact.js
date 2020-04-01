import React, { Component } from 'react'
import './Contact.css'

import resume from '../res/AntonWebbResume.pdf'

export class Contact extends Component {
    render() {
        return (
            <div className='contactContainer'>
                
                <div className='contactTextContainer'>

                    <div className='contactContainerTop'>
                        <a className='contactLink' rel="noopener noreferrer" target="_blank" href='https://github.com/anton25360'>Github</a>
                        <a className='contactLink' rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/anton-webb/'>LinkedIn</a>
                        <a className='contactLink' rel="noopener noreferrer" target="_blank" href={resume} download>Resume</a>
                        <a className='contactLink' rel="noopener noreferrer" target="_blank" href='https://medium.com/@anton25360'>Medium</a>
                    </div>
                    
                    <div className='contactContainerBot'>
                        <p id='mailText'>get in touch</p><br/>
                        <a id='mailLink' href='mailto:anton@mail.fr'>anton@mail.fr</a>
                    </div>

                </div>

            </div>
        )
    }
}

export default Contact
