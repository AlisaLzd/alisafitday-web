import React from "react";
 import kick from '../Assets/kick.JPG';
import Template from "./Template";
import EmailForm from "./EmailForm";


function KickstarterPage() {
  
    var eng = JSON.parse(localStorage.getItem("lang"));

    return (
    
<Template
img={kick}
imageWidth = "1000"
content={
   <div>
     <h1 className="display-5 fw-bold lh-1 mb-3">FITDAY KICKSTARTER</h1>
     {eng ? 
     (<div>
        <ol>
<li>3 day bootcamp to kicktart your fitness journey or to spice up your existing routine.</li>
<li>3 full different workouts that you can join online or get a 3 day workout PDF guide!</li>
<li>3 day meal plan with recipes and guide to calculate your macros!</li>
<li>3 day support from your fitness and nutrition coach!</li>
<li>3 day KICKSTARTERS happen every month, but only those who signed up will get an invitation! So what are you waiting for?</li>
<li>EVERYTHING is included in a price of only 20EUR! Workouts, meal plan, support! Sign up now! </li>
     </ol>
    <EmailForm />
     </div>) 
     : 
     (<div>
        <ol>
<li>3 dienu programma, lai uzsāktu veselīgu dzīvesveidu vai arī atsvaidzinātu esošo treniņu un uztura plānu.</li>
<li>3 dažādi treniņi, kuriem vari pieslēgties un vingrot tiešsaistē, vai arī vingrot vēlāk ierakstā kā arī iespēja saņemt 3 dienu PDF treniņu plānu. </li>
<li>3 dienu uztura plāns ar receptēm un norādēm, kā aprēķināt nepieciešamo kaloriju daudzumu!</li>
<li>3 dienu atbalsts no Tava fitnesa un uztura trenera!</li>
<li>3 dienu KICKSTARTERI notiek katru mēnesi, bet tikai tie, kas ir pieteikušies, saņems uzaicinājumu! Ko Tu vēl gaidi?</li>
<li>PILNĪGI VISS - treniņi, ēdienkarte un konsultācijas TIKAI par 20EUR!!! Piesakies tagad!</li>
     </ol>
     <EmailForm />
     </div>)}
        
   </div> 
}/>
  
   );}
  
  export default KickstarterPage;