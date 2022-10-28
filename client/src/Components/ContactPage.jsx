import React from "react";
import ContactForm from "./ContactForm";
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'


function ContactPage() {


  var eng = JSON.parse(localStorage.getItem("lang"));

    return (
        <div>
        <div className="welcome">
     <h1>{eng ? ("Contact me") : ("Sazinies ar mani") }</h1>
     <h2>ALISAFITDAY@GMAIL.COM</h2>
</div>

<div className="contact row align-items-md-stretch">
      <div className="col-md-6">
       <ContactForm message={eng ? ("Hi, Alisa!") : ("Čau, Alisa!") }/>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>{eng ? ("Contact me on socials!") : ("Sazinies ar mani soctīklos!") }</h2>
          <a href="https://www.facebook.com/alisakuz/" className="socialButton"><i className="fa-brands fa-facebook-messenger fa-4x"></i></a>
          <a href="https://twitter.com/alisafitday" className="socialButton"><i className="fa-brands fa-twitter fa-4x"></i></a>
          <a href="https://www.instagram.com/alisafitday/" className="socialButton"><i className="fa-brands fa-square-instagram fa-4x"></i></a>
          <a href="https://www.linkedin.com/in/alisa-lagzdi%C5%86a-bb1b3922a" className="socialButton"><i className="fa-brands fa-linkedin fa-4x"></i></a>
        </div>
      </div>
    </div>
    <div className="contact">
    <h2>{eng ? ("Follow me on INSTAGRAM!") : ("Seko man INSTAGRAMĀ!") }</h2>
    <InstagramFeed token={process.env.REACT_APP_IG_TOKEN}  counter="6"/>
    </div>
</div>
);   
  }
  
  export default ContactPage;