import './contact.css';
import Socials from '../Socials/Socials';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rujybsc', 'template_njs2yoa', form.current, 'L-uctoc0fSKEIUsJm')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email sent!')
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contact-section">
            <div id="contact-text-container">
                <h2 id="contact-title">Contact</h2>
                <span id="contact-description">Fill out the form below and get in touch today!</span>
            </div>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input type="text" id="name" placeholder="Your Name" name="user_name"/>
                <input type="email" id="email" placeholder="Your Email" name="user_email"/>
                <textarea name="message" id="message" rows="5" placeholder="Type your message here..."></textarea>
                <button type="submit" value='Send' className="submit-btn">Submit</button>
            </form>       
            <Socials />
        </section>
    );
}

export default Contact;



