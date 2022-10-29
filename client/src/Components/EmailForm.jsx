import React from "react";
import { useState } from "react";
import ThankYou from "./ThankYou";
import axios from "axios";

function EmailForm() {
  const [singUp, toggleSignUp] = useState(true);
  function setState() {
    toggleSignUp(!singUp);
  }

  const [email, setEmail] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    setState();
    //let URI = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URI : process.env.REACT_APP_PROD_URI;
    //  let URI = process.env.REACT_APP_PROD_URI + "/form";
    try {
      await axios.post("/api/form", { email: email });
    } catch (error) {
      console.error(error);
    }
  };

  var eng = JSON.parse(localStorage.getItem("lang"));
  return (
    <div>
      {singUp ? (
        <form onSubmit={handleSend} className="emailForm" method="post">
          <div className="row row row-cols-1 row-cols-2 g-4 mb-3">
            <div className="col">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="name@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-warning">
                {eng ? "Sign up" : "Pieteikties"}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <ThankYou />
        </div>
      )}
    </div>
  );
}

export default EmailForm;
