import React from "react";
import "../styles/Contact.css";
import { FaRoad, FaPhone, FaEnvelope } from "react-icons/fa"; // Import specific icons from react-icons

export default function Home() {
  return (
    <div className="cbody">
      <div className="container">
        <h1 className="brand">
          <span>Universal</span> Farms
        </h1>
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Universal Farms</h3>
            <ul>
              <li>
                <FaRoad /> Hyderabad, Telangana
              </li>
              <li>
                <FaPhone /> (+91) 955xxxxxxx
              </li>
              <li>
                <FaEnvelope /> info@universalfarms.in
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <form>
              <p>
                <label>Name</label>
                <input type="text" name="name" />
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5" />
              </p>
              <p className="full">
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
