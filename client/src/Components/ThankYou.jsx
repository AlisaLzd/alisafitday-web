import React from "react";


function ThankYou() {
  var eng = JSON.parse(localStorage.getItem("lang"));
    return (
        <div>
               <p className="thankyou">{eng ? ("Thank you for signing up!") : ("Paldies par pieteikumu!")}</p>
      </div>
      
    );
  }
  
  function ThankYouLetter() {
    var eng = JSON.parse(localStorage.getItem("lang"));
      return (
          <div>
                 <p className="thankyou">{eng ? ("Thank you! I will answer you as soon as I can!") : ("Paldies! Sazināsos ar Tevi cik vien drīz varēšu!")}</p>
        </div>
        
      );
    }


export {ThankYouLetter};
  export default ThankYou;