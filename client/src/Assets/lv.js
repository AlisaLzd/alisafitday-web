import workoutplan from './workoutplan.JPG';
import mealplan from './mealplan.JPG';
import kickstarter from './kickstarter.JPG';
import fitdayapp from './fitdayapp.png';

const sveiciens = "Čau! Mani sauc Alisa.";
const sveiciensApraksts = "Esmu sertificēta trenere un uztura zinātniece. Labprāt palīdzēšu Tev sasniegt mērķus un uzlabot veselību!";
const kartes = [
    {
id: 1,
img: workoutplan,
title: "TRENIŅU PLĀNS",
text: "Personalizēti treniņu plāni, programmas, tiešsaistes personāltreniņi.",
    cardButton: "Uzzināt vairāk",
    link: "/workoutplan"
},
    {
        id: 2,
        img: mealplan,
        title: "UZTURA PLĀNS",
        text: "Ēdienkartes analīze, rekomendācijas un uztura plāns ar receptēm.",
        cardButton: "Uzzināt vairāk" ,
        link: "/mealplan"
    },
            {
                id: 3,
                img: kickstarter,
                title: "FITDAY KICKSTARTER",
                text: "3 dienu intensīvā programma ar tiešsaistes treniņiem, pielāgojamu uztura plānu un privātu konsultāciju.",
                cardButton: "Uzzināt vairāk",
                link: "/kickstarter"
            },
                    {
                        id: 4,
                        img: fitdayapp,
                        title: "FITDAY APP",
                        text: "Ērta aplikācija dienas, treniņu un ēdienkartes plānošanai, mērķu sasniegšanas plāns.",
                        cardButton: "Uzzināt vairāk",
                        link: "/fitdayapp"
                    },
];
const piesakies1 = "Es nepārtraukti strādāju pie jauniem mobilo aplikāciju projektiem! Sākot ar ērtiem un vienkāršiem plānotājiem līdz fitnesa taimeriem. Top arī īpaša aplikācija pāriem!  🤫😉";
const piesakies2 = "Uzzini pirmais par jaunumiem, aplikācijām, izaicinājumiem un pat saņem tiešsaistes treniņus par brīvu! ";
const parMani = "Par mani..";
const parManiTeksts = "Īsumā svarīgākais, kas par mani jāzin - man ļoti patīk mācīties. Esmu to darījusi un daru visu savu dzīvi un es to izbaudu. Mani skolotāji vienmēr teikuši, ka man ir tehnisks prāts. Datori un cipari ir mani draugi. Mans pirmais mācību lauciņš bija inženierzinātne.  Man ir bakalaura grāds būvniecībā un tas deva pamatu visam, ko tālāk mācījos. Paralēli būvniencībai ieguvu vēl vienu grādu - veselības sportā. Ne mazāk kā matemātika, man patīk arī sports un biomehānika (kas savā ziņā arī ir matemātika). Pēc bakalaura studiju beigšanas, sāku strādāt savā sapņu darbā - iedvesmojošā fitnesa studijā, ar komandu, kuru apbrīnoju. Fitnesa studijā nostrādāju 10 gadus un savas karjeras laikā esmu trenējusi simtiem cilvēku.  Šajā laikā ieguvu arī maģistra grādu uzturzinātnē. Tomēr mana  mīlestība pret datoriem nekur nepazuda! Brīvajā laikā turpinu apgūt programmēšanu un nodarbojos ar programmatūras izstrādi. Ceru, ka esi uzzinājis par mani , ko jaunu!";

export {sveiciens, sveiciensApraksts, kartes, piesakies1, piesakies2, parMani, parManiTeksts};