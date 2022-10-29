import React from "react";
import { useState } from "react";
import { ThankYouLetter } from "./ThankYou";

function ContactForm(props) {
  var eng = JSON.parse(localStorage.getItem("lang"));
  const [singUp, toggleSignUp] = useState(true);
  function setState() {
    toggleSignUp(!singUp);
  }

  const [status, setStatus] = useState("Submit");

  const handleSend = async (e) => {
    e.preventDefault();
    setState();
    const { email, text } = e.target.elements;
    let details = {
      email: email.value,
      text: text.value,
    };

    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
  };

  return (
    <div>
      {singUp ? (
        <form onSubmit={handleSend} method="post">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="text"
              rows="3"
              placeholder={props.message}
            ></textarea>
            <button className="btn btn-outline-warning" type="submit">
              {eng ? (
                <i className="fa-solid fa-paper-plane"> Send</i>
              ) : (
                <span>
                  <i className="fa-solid fa-paper-plane"></i>Sūtīt
                </span>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <ThankYouLetter />
        </div>
      )}
    </div>
  );
}

export default ContactForm;
