import React from 'react'

function Contact() {
    return (
        <div id='contact'>
            <h1>BOOK YOUR MEAT</h1>
            <form>
                <input type='text' placeholder='Full name'/>
                <input type='email' placeholder='Type your e-mail'/>
                <textarea placeholder='Write here your message'/>
                <button className='contact-button'>Send message</button>
            </form>
         </div>
    )
}

export default Contact;
