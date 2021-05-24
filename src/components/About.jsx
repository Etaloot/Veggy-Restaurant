import React from 'react'
import menuimage from '../images/menu.jpg'

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>ABOUT US</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u
                  printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button>Read More</button>
            </div>

            <div className='about-image'>
                <img src={menuimage} alt=''/>
            </div>
        </div>

    )
}

export default About;
