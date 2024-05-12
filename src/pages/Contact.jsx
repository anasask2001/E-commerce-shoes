import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MDBBtn } from "mdb-react-ui-kit";
import "../pages/Contact.css";

function Contact() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const userMessage = formData.get("user_message");

    // Check if any of the fields are empty
    if (!userName || !userEmail || !userMessage) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    emailjs
      .sendForm("service_apg3s8n", "template_f1s55qc", form.current, {
        publicKey: "QBs261zIZck7V-nzj",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            className="size"
            type="text"
            placeholder="Enter your name"
            name="user_name"
          />
          <label>Email</label>
          <input
            className="size"
            type="email"
            placeholder="Enter your email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            className="size1"
            placeholder="Type here..."
            name="user_message"
          />

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <MDBBtn className="size" type="submit" value="send">
            Button
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}

export default Contact;
