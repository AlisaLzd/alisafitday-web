import React from "react";


function Welcome() {

  var eng = JSON.parse(localStorage.getItem("lang"));

    return (
        <div className="welcome">
<div>
     <h1>{eng ? ("welcome") : ("Laipni lūgti") }</h1>
     <h2>{eng ? ("TO ALISAFITDAY") : ("ALISAFITDAY")}</h2>
</div>
</div>
);   
  }
  
  export default Welcome;