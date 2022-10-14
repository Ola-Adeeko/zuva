import React, { useEffect } from "react";
import "./contact.scss";

const Contact = () => {
  useEffect(() => {
    document.title = "Zuva | Contact";
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-form">
        <div className="form-head">
          <span>Contact Us</span>
        </div>
        <form action="#" className="form-body">
          <div className="form-field">
            <span className="form-label">YOUR NAME</span>
            <input
              className="form-input"
              placeholder="Name"
              type="text"
              required
            />
          </div>
          <div className="form-field">
            <span className="form-label">EMAIL ADDRESS</span>
            <input
              className="form-input"
              placeholder="Email Address"
              type="email"
              required
            />
          </div>
          <div className="form-field">
            <span className="form-label">PHONE NUMBER</span>
            <input className="form-input" placeholder="Phone Number" required />
          </div>
          <div className="form-field">
            <span className="form-label">MESSAGE</span>
            <input
              className="form-input"
              placeholder="Message"
              type="text"
              required
            />
          </div>
          <div className="form-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
