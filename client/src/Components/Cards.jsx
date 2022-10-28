import React from "react";
import Card from "./Card";
import { cardTexts } from "../Assets/eng";
import { kartes } from "../Assets/lv";


function createCard(cardTexts) {
  
    return (
      <Card
        key={cardTexts.id}
       image={ <img src={cardTexts.img} className="img-responsive card-img-top" alt="z" />}
       title={cardTexts.title}
       description={cardTexts.text}
       cardButton={cardTexts.cardButton}
       link={cardTexts.link}
      />
    );
  }

function Cards() {
  var eng = JSON.parse(localStorage.getItem("lang"));
    return (
        <div className="cards row row-cols-1 row-cols-lg-2 g-4">
        {eng ? (cardTexts.map(createCard)) : (kartes.map(createCard))}
      </div>
    
    );
  }
  
  export default Cards;