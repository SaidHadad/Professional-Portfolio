import React, { useState} from "react";
import { validateEmail } from "../../Assets/Utils/helpers"
import "./Contact.scss";

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className="ContactForm">
      <div className="contactFormContainer">
        <h1 data-testid="h1tag">Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="nameForm">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="emailForm">
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="messageForm">
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="3" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="formButton" data-testid="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;