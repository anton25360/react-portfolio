import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {

    scroll = (input) => {
        document.querySelector(input).scrollIntoView({
            behavior: 'smooth'
        });

    }

    render() {



        return (
            <div className='navContainer'>
                <nav>
                    <p className='navElement navLeft'><spam id='slash'>/</spam>anton</p>
                    <button className='navElement navRight' onClick={() => this.scroll('.contactContainer')}>Contact</button>
                    <button className='navElement navRight' onClick={() => this.scroll('.MPContainer')}>Projects</button>
                    <button className='navElement navRight' onClick={() => this.scroll('.aboutContainer')}>About</button>

                </nav>

            </div>
        )
    }
}

export default Navbar
