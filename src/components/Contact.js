import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className='contactContainer'>
                
                <div className='contactTextContainer'>

                    <div className='contactContainerTop'>
                        <a className='contactLink' href='www.anton.com'>Github</a>
                        <a className='contactLink' href='www.anton.com'>LinkedIn</a>
                        <a className='contactLink' href='www.anton.com'>Resume</a>
                        <a className='contactLink' href='www.anton.com'>Medium</a>
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
