import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import './contact.css';

function Contact(props) {

    const [fromName, setFromName] = useState('');
    const [message, setMessage] = useState('');
    const [fromEmail, setFromEmail] = useState('');

    const sendEmail = (e) => {

        e.preventDefault()
        const templateParams = {
            to_name: 'Thashreef',
            from_name: fromName,
            from_email:fromEmail,
            message
        };

        emailjs
            .send('service_pxf8pf9', 'template_nsvc9of', templateParams, {
                publicKey: 'b--uyDfB6LV35_PZm',
            })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                },
            );
    }

    return (
        <div className='contact'>
            <div className="contact-items" >
                <h3>GET IN TOUCH</h3>

                <form onSubmit={(e)=> sendEmail(e)}>
                    <div className="input">
                        <input
                            type="text"
                            placeholder='NAME'
                            value={fromName}
                            onChange={(e) => setFromName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder='EMAIL'
                            value={fromEmail}
                            required
                            onChange={(e)=> setFromEmail(e.target.value)}
                        />
                        <textarea 
                            className="message" 
                            type="text" 
                            placeholder='MESSAGE'
                            value={message}
                            required
                            onChange={(e)=> setMessage(e.target.value)}
                        />
                        <button className='submitButton' type='submit'>SUBMIT</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Contact;