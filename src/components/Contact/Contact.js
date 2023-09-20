import './contact.css';
import Socials from '../Socials/Socials';
const Contact = () => {
    return (
        <section id="contact-section">
            <div id="contact-text-container">
                <h2 id="contact-title">Contact</h2>
                <span id="contact-description">Fill out the form below and get in touch today!</span>
            </div>
            <form id="contact-form">
                <input type="text" id="name" placeholder="Your Name"/>
                <input type="email" id="email" placeholder="Your Email"/>
                <textarea name="message" id="message" rows="5" placeholder="Type your message here..."></textarea>
                <button type="submimt" value='Send' className="submit-btn">Submit</button>
            </form>       
            <Socials />
        </section>
    );
}

export default Contact;