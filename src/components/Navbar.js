import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {

    scroll=(input)=>{
        document.querySelector(input).scrollIntoView({ 
            behavior: 'smooth' 
          });
        
    }

    render() {



        return (
            <div className='navBackground'>
                <nav>
                    <p className='navElement navLeft'><spam id='slash'>/</spam>anton</p>
                    <a className='navElement navRight' href='#contact' onClick={()=> this.scroll('.contactContainer')}>Contact</a>
                    <a className='navElement navRight' href='#projects' onClick={()=> this.scroll('.projTarget')}>Projects</a>
                    <a className='navElement navRight' href="#about" onClick={()=> this.scroll('.aboutContainer')}>About</a>

                </nav>
                
            </div>
        )
    }
}

export default Navbar
