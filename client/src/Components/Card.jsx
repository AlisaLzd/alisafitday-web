import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  
  const navigate = useNavigate();

    return (
       
        <div className="col">
          <div className="card mb-3">
  <div className="row row-cols-1 row-cols-lg-2 g-4">
    <div className="col-md-4">
   {props.image}
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button type="button" className="btn btn-warning"  onClick={() => { navigate(props.link) }}>{props.cardButton}</button>
      </div>
    </div>
  </div>
</div>
        </div>
          
    );
  }
  
  export default Card;