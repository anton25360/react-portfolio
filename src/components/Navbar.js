import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {

    scrollToAbout=()=>{
        document.querySelector('.aboutContainer').scrollIntoView({ 
            behavior: 'smooth' 
          });
        
    }

    render() {



        return (
            <div className='navBackground'>
                <nav>
                    <p className='navElement navLeft'>Anton Webb.</p>
                    <a className='navElement navRight' href='#contact' onClick={()=> this.scrollToAbout()}>Contact</a>
                    <a className='navElement navRight' href='#projects' onClick={()=> this.scrollToAbout()}>Projects</a>
                    <a className='navElement navRight' href="#about" onClick={()=> this.scrollToAbout()}>About</a>

                </nav>
                
            </div>
        )
    }
}

export default Navbar
