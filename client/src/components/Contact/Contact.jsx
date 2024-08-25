import React from 'react';
import './contact.css';

function Contact(props) {
    return (
        <div className='contact'>
            <div className="contact-items"  onClick={()=> alert("YO")}>
                <h3>GET IN TOUCH</h3>

                <div className="input">
                    <input type="text" placeholder='NAME' />
                    <input type="email" placeholder='EMAIL'/>
                    <textarea className="message" type="text" placeholder='MESSAGE'/>
                    <button className='submitButton'>SUBMIT</button>
                </div>

            </div>
        </div>
    );
}

export default Contact;