import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Invalid entry.");
      return;
    }

    if (!setMessage(message)) {
      setErrorMessage(`Invalid entry.`);
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>

        <div className="contact-form">
          <div className="contact-info"> 
          <h3>Contact Me</h3>
          <p>My Contact Information</p>
          <address>
            Middletown, New Jersey <br />
            Phone Number: <a href="tel:201.661.3988">201-661-3988</a>
            <br />
            Email:{" "}
            <a href="khermann135@gmail.com">
              khermann135@gmail.com
            </a>
          </address>
          </div>
          <form className="form">
            <label for="contact-name">Name:</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
            />

            <label for="contact-email">Email:</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
            />

            <label for="contact-message">Message:</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    </section>
  );
}

export default Contact;
