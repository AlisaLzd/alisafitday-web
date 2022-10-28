import React from "react";
import { useState } from "react";
 import workout from '../Assets/workout.JPG';
import ContactForm from "./ContactForm";
import Template from "./Template";


function WorkoutPlanPage() {
  
    var eng = JSON.parse(localStorage.getItem("lang"));
    const [singUp, toggleSignUp] = useState(true)
    function setState() {
      toggleSignUp(!singUp);
    }
    return (
    
<Template
img={workout}
imageWidth = "1000"
content={
   <div>
     <h1 className="display-5 fw-bold lh-1 mb-3">{eng ? "Workout plan" : "Treniņu plāns"}</h1>
     {eng ? 
     (<div>
        <ol>
<li>Fully customized - just for you!</li>
<li>Get results!</li>
<li>Do workouts and activities that you enjoy!</li>
<li>One on one online sessions or electronic workout guide - you choose!</li>
<li>Located in Norway? Get an in person PT session!</li>
<li>Prices start from 30EUR. Get your exact pricing by requesting a plan!</li>
     </ol>
     {singUp ?
    ( <button type="button" className="btn btn-warning" onClick={setState}>{eng ? ("Request now"):("Pieteikties tagad!")}</button> )
    :
   
    (  <div className="contact"><ContactForm message={eng ? ("Please describe what kind of training would you prefer and what are your goals (weight loss, muscle build, health improvement etc.)! I will reply to your email with what I can offer.") : ("Šeit lūdzu norādi, kāda veida treniņus Tu vēlies! Es atbildēšu uz Tevis norādīto epastu ar piedāvājumu.") }/></div>)}
     </div>) 
     : 
     (<div>
        <ol>
<li>Perfekti izstrādāts plāns - tieši Tev!</li>
<li>Gūsti rezultātus!</li>
<li>Vingro tieši tā, kā tev patīk!</li>
<li>Privātas tiešsaistes nodarbības vai elektronisks treniņu plāns - izvēlies Tu!</li>
<li>Esi Norvēģijā? Rezervē personāltreniņu klātienē!</li>
<li>Cenas sākot no 30 EUR. Uzzini precīzu cenu piesakoties!</li>
     </ol>

     {singUp ?
    ( <button type="button" className="btn btn-warning" onClick={setState}>{eng ? ("Request now"):("Pieteikties tagad!")}</button> )
    :
   
    (  <div className="contact"><ContactForm message={eng ? ("Please describe what kind of training would you prefer and what are your goals (weight loss, muscle build, health improvement etc.)! I will reply to your email with what I can offer.") : ("Šeit lūdzu norādi, kāda veida treniņus Tu vēlies! Es atbildēšu uz Tevis norādīto epastu ar piedāvājumu.") }/></div>)}



     </div>)}
        
   </div> 
}/>
  
   );}
  
  export default WorkoutPlanPage;