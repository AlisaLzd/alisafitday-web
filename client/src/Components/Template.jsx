import React from "react";




function Template(props) {



    return (
    
        <div className="about container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={props.img} className="d-block mx-lg-auto img-fluid" alt="graduation" width={props.imageWidth} loading="lazy"/>
      </div>
      <div className="col-lg-6">
       {props.content}  
      </div>
    </div>
  </div>
   
       
   );
  }
  
  export default Template;
