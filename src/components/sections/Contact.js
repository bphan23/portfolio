import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Contact Section Component
function Contact() {

  const form = useRef();
  const [nameInput, setName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [messageTextArea, setMessage] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    // send email
    emailjs.sendForm('service_hk6o71l', 'template_e3eyqty', form.current, 'UbHZljRBDBe25vyX1')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });

    // reset after 5 milliseconds
    setTimeout(() => {
      event.target.reset();
    }, 500);

  };

  return (
    <section id="contact">
      <div class="title" data-aos="fade-up">
        <h2>Lets Connect!</h2>
        <p>Feel free to reach me through the contact form down below or my socials, thank you!</p>
      </div>

      <address data-aos="fade-up">
        <a href="https://www.linkedin.com/in/bryan-n-phan/" target="_blank" rel="noreferrer">
          <div id="linkedin-contact"></div>
        </a>
        <a href="mailto:Bryannphan1@gmail.com">
          <div id="email-contact"></div>
        </a>
        <a href="https://github.com/bphan23" target="_blank" rel="noreferrer">
          <div id="github-contact"></div>
        </a>
      </address>

      <div id="contact-container" data-aos="fade-up">
        <div id="contact-form">
          <form ref={form} onSubmit={handleSubmit}>
            <div id="form-inputs-div">
              <label>Name</label>
              <input
                id="name_input"
                type="text"
                placeholder="Enter Name"
                name="user_name"
                onChange={event => {
                  setName(event.target.value);
              }}/>
              <label>Email</label>
              <input
              id="email_input"
                type="text"
                placeholder="Enter Email"
                name="user_email"
                onChange={event => {
                  setEmail(event.target.value)
                }}/>
              <label>Message</label>
              <textarea
                name="message"
                type="text"
                placeholder="Enter Message"
                onChange={event => {
                  setMessage(event.target.value);
                }}/>
            </div>
            <div id="submit-input-div">
              <input id="submit-input-btn" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>

    </section>
  );
}

export default Contact;