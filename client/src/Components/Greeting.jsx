import React from "react";
import alisa from '../Assets/alisa.JPG';
import {greeting, greetingDescription} from '../Assets/eng.js';
import {sveiciens, sveiciensApraksts} from '../Assets/lv.js';


function Greeting() {
  
  var eng = JSON.parse(localStorage.getItem("lang"));
    return (
        <div className="greeting row featurette">
{eng ? (
    <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">{greeting}</h2>
        <p className="lead">{greetingDescription} </p>
      </div>
) : (
    <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">{sveiciens}</h2>
        <p className="lead">{sveiciensApraksts} </p>
      </div>
)

}
      
      <div className="col-md-5">
       <img src={alisa} alt="alisa" width="300"/>
      </div>
    </div>
    
    );
  }
  
  export default Greeting;