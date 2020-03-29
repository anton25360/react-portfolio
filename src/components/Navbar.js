import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className='navBackground'>
                <nav>
                    <p className='navElement navLeft'>Anton Webb.</p>
                    <a className='navElement navRight' href="#contact">Contact</a>
                    <a className='navElement navRight' href="#projects">Projects</a>
                    <a className='navElement navRight' href="#about">About</a>

                </nav>
                
            </div>
        )
    }
}

export default Navbar
