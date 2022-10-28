
import React from "react";
import { useLocation } from 'react-router-dom';



function Navbar() {
  var lang = JSON.parse(localStorage.getItem("lang"));
  const location = useLocation()

    return (
      <header>
        <nav className="navbar navbar-expand-lg bg-light rounded">
      <div className="container-fluid">
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
         

        <div className="collapse navbar-collapse justify-content-md-center" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/" >{lang ? ("Home") : ("Sākums")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" >{lang ? ("About") : ("Par mani")}</a>
            </li>
            <li className="nav-item dropdown">
              <button className="navButton nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{lang ? ("Products") : ("Pakalpojumi") }</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/workoutplan" >{lang ? ("Workout plan") : ("Treniņu plāns")}</a></li>
                <li><a className="dropdown-item" href="/mealplan">{lang ? ("Meal plan") : ("Uztura plāns")}</a></li>
                <li><a className="dropdown-item" href="/kickstarter" >FITDAY kickstarter</a></li>
                <li><a className="dropdown-item" href="/fitdayapp" >FITDAY app</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contacts">{lang ? ("Contacts") : ("Kontakti")}</a>
            </li>
            <li className="nav-item dropdown">
              <button className="navButton nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{lang ? ("Language") : ("Valoda") }</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={location.pathname} onClick={() => { localStorage.setItem("lang", true) }}>ENG</a></li>
                <li><a className="dropdown-item" href={location.pathname} onClick={() => { localStorage.setItem("lang", false) }}>LV </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </header>
    );
  }
  
  export default Navbar;
