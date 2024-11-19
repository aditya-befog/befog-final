import React from "react";
import "./Contact.css";
import whatsapp from "../../assets/img/whatsapp.png";
import pen from "../../assets/img/pen.png";

function contact() {
  return (
    <div className="Contact">
      <div className="header-Contact">
        <h1>Contact Us</h1>
        <div className="Rectangle-16-Contact"></div>
        <p>
          We are here to help and answer any question you might here. We look
          forward to hearing from you.
        </p>
      </div>
      <div className="contact">
        <div className="callUs">
          <img src={whatsapp} alt="" />
          <h3>Call Us</h3>
          <p>Support: +91 1234567890</p>
        </div>
        <div className="img1">
        </div>
        <div className="img2">
        </div>
        <div className="writeUs">
          <img src={pen} alt="" />
          <h3>Write Us</h3>
          <p>contact.us@befog.in</p>
        </div>
      </div>
      <h2>Get in touch</h2>
      <div className="touch">
        <div className="contact-img">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89505.85425355299!2d80.88177913161047!3d26.87660488687303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf98c55c97199d7b%3A0xffb3b0de54faaa0e!2sBefog%20(A%26W%20Technologies)!5e0!3m2!1sen!2sin!4v1731913703747!5m2!1sen!2sin"
        width="600"
        height="650"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
        <div className="contact-details">
          <div className="single-line">
            <form>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
            </form>
            <form>
            <label htmlFor="">Phone Number</label>
              <input type="tel" placeholder="Phone Number" />
            </form>
          </div>
          <form>
          <label htmlFor="">Email Address</label>
            <input type="email" placeholder="Email Address" />
          </form>
          <form>
          <label htmlFor="">Message</label>
            <textarea placeholder="Message"></textarea>
          </form>
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}

export default contact;
