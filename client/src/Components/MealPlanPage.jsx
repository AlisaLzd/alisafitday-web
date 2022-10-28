import React from "react";
import { useState } from "react";
 import meal from '../Assets/meal.JPG';
import ContactForm from "./ContactForm";
import Template from "./Template";


function MealPlanPage() {
  
    var eng = JSON.parse(localStorage.getItem("lang"));
    const [singUp, toggleSignUp] = useState(true)
    function setState() {
      toggleSignUp(!singUp);
    }
    return (
    
<Template
img={meal}
imageWidth = "1000"
content={
   <div>
     <h1 className="display-5 fw-bold lh-1 mb-3">{eng ? "Meal plan" : "Uztura plāns"}</h1>
     {eng ? 
     (<div>
        <ol>
<li>Fully customized - just for you!</li>
<li>Get results!</li>
<li>Get your existing diet detailed analysis!</li>
<li>One on one online sessions or electronic meal plan - you choose!</li>
<li>Full meal plan with recipes!</li>
<li>Prices start from 40EUR. Get your exact pricing by requesting a plan!</li>
     </ol>
     {singUp ?
    ( <button type="button" className="btn btn-warning" onClick={setState}>{eng ? ("Request now"):("Pieteikties tagad!")}</button> )
    :
   
    (  <div className="contact"><ContactForm message={eng ? ("Please describe what kind of meal plan would you prefer and what are your goals (weight loss, muscle build, health improvement etc.)! I will reply to your email with what I can offer.") : ("Šeit lūdzu norādi, kāda veida uztura plānu Tu vēlies! Es atbildēšu uz Tevis norādīto epastu ar piedāvājumu.") }/></div>)}
     </div>) 
     : 
     (<div>
        <ol>
<li>Pefekti izstrādāts plāns - tieši Tev!</li>
<li>Gūsti rezultātus!</li>
<li>Saņem savas esošās ēdienkartes detalizētu analīzi!</li>
<li>Privātas tiešsaistes nodarbības vai elektronisks uztura plāns - izvēlies Tu!</li>
<li>Pilns uztura plāns ar receptēm!</li>
<li>Cenas sākot no 40 EUR. Uzzini precīzu cenu piesakoties!</li>
     </ol>
     {singUp ?
    ( <button type="button" className="btn btn-warning" onClick={setState}>{eng ? ("Request now"):("Pieteikties tagad!")}</button> )
    :
   
    (  <div className="contact"><ContactForm message={eng ? ("Please describe what kind of meal plan would you prefer and what are your goals (weight loss, muscle build, health improvement etc.)! I will reply to your email with what I can offer.") : ("Šeit lūdzu norādi, kāda veida uztura plānu Tu vēlies! Es atbildēšu uz Tevis norādīto epastu ar piedāvājumu.") }/></div>)}
     </div>)}
        
   </div> 
}/>
  
   );}
  
  export default MealPlanPage;