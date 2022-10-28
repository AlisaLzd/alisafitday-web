
import React from "react";

 import master from '../Assets/master.JPG';

import {about, aboutText} from '../Assets/eng.js';
import {parMani, parManiTeksts} from '../Assets/lv.js';
import Template from "./Template";


function AboutPage() {



    
    var eng = JSON.parse(localStorage.getItem("lang"));

    return (
    
<Template
img={master}
content={
   <div>
     <h1 className="display-5 fw-bold lh-1 mb-3">{eng ? (about) : (parMani)}</h1>
        <p className="center">{eng ? (aboutText) : (parManiTeksts)}</p>
   </div> 
}/>
      
   );}
  
  export default AboutPage;




