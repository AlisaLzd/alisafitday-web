import React from "react";
import alisaAndLaptop from '../Assets/alisaAndLaptop.png';
import EmailForm from "./EmailForm";
import { mailingP1, mailingP2 } from "../Assets/eng";
import { piesakies1, piesakies2 } from "../Assets/lv";


function Mailing() {
  var eng = JSON.parse(localStorage.getItem("lang"));
    return (
        <div className="mailingList row featurette">
      <div className="col-md-7">
        <p className="big">{eng ? (mailingP1) : (piesakies1)}</p>
        <p className="lead">{eng ? (mailingP2) : (piesakies2)}</p>
        </div>
      <div className="col-md-5">
       <img src={alisaAndLaptop} alt="alisa and laptop" width="300"/>
      </div>
      <EmailForm />
      
    </div>
    
    );
}
  
  export default Mailing;