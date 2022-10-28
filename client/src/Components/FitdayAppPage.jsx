import React from "react";
 import app from '../Assets/fitdayapp.png';
import Template from "./Template";
import EmailForm from "./EmailForm";


function KickstarterPage() {
  
    var eng = JSON.parse(localStorage.getItem("lang"));

    return (
    
<Template
img={app}
imageWidth = "1000"
content={
   <div>
     <h1 className="display-5 fw-bold lh-1 mb-3">FITDAY app</h1>
     {eng ? 
     (<div>
        <ol>
<li>Plan your day with simple todo list.</li>
<li>Plan your workouts or get a sample workout!</li>
<li>Plan your meals and track water intake!</li>
<li>Get meal suggestions with recipes!</li>
<li>Improve your mental health by practising gratitude.</li>
<li>Reach your goals by setting deadlines and planning your actions steps!</li>
<li>Order customized plans through the app!</li>
<li>App is free! Leave your email and I will let you know the release date! </li>
     </ol>
    <EmailForm />
     </div>) 
     : 
     (<div>
        <ol>
<li>Plāno savu dienu ar vienkāršu darāmo darbu sarakstu.</li>
<li> Plāno savus treniņus vai arī saņem brīvi pieejamus treniņu plānus!</li>
<li>Plāno savu dienas ēdienkarti un seko uzņemtā ūdens daudzumam!</li>
<li>Saņem receptes un idejas maltītēm!</li>
<li>Uzlabo savu garīgo veselību praktizējot pateicības tehnikas katru dienu.</li>
<li>Sasniedz mērķus nosakot termiņus un plānojot darbības soļus.</li>
<li>Pasūti personalizētus plānus caur aplikāciju!</li>
<li>Aplikācija ir bez maksas! Atstāj savu epastu zemāk un es tev paziņošu, kad tā būs pieejama!</li>
     </ol>
     <EmailForm />
     </div>)}
        
   </div> 
}/>
  
   );}
  
  export default KickstarterPage;