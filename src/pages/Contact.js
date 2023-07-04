import React from "react";
import FormInput from "../components/FormInput";

export default function Home() {
    return (
      <div>
        <h1>Contact Us</h1>
        <div className="contact">
          <form>
            <FormInput placeholder="Full Name"/>
            <FormInput placeholder="Phone Number"/>
            <FormInput placeholder="Email"/>
          </form>
        </div>
      </div>
    );
  }

  