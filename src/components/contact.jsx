import React, {useState} from "react";
import {validateEmail} from "../utils/helpers"


const ContactFormComponent = () => {
   const [contactFields, setContactFields] = useState({
      name: "",
      email: "",
      message: "",
    });

    const { name, email, message } = contactFields;
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
      if (e.target.name === "email") {
        const isValid = validateEmail(e.target.value);
        // isValid conditional statement
        if (!isValid) {
          setErrorMessage("Your email is invalid.");
        } else {
          setErrorMessage("");
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name.toUpperCase()} is required.`);
        } else {
          setErrorMessage("");
        }
      }
  
      if (!errorMessage) {
        setContactFields({ ...contactFields, [e.target.name]: e.target.value });
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(contactFields);
    }

  
   return (

      <section className="contactContainer">
      <h1>Contact Me</h1>
      <h3><i>Leave me a message, I would love to here from you!</i></h3>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="form-area">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div className="form-area">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div className="form-area">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div className="error-container">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="submit-button" type="submit" >
          Submit
        </button>
      </form>
    </section>
   )
}

export default ContactFormComponent;