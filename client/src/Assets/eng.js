
import workoutplan from './workoutplan.JPG';
import mealplan from './mealplan.JPG';
import kickstarter from './kickstarter.JPG';
import fitdayapp from './fitdayapp.png';


const greeting = "Hi! My name is Alisa.";
const greetingDescription = "I am certified fitness trainer and nutrition scientist. I would love to help you on your journey of becoming a better version of yourself!";
const cardTexts = [
    {
id: 1,
img: workoutplan,
title: "WORKOUT PLAN",
text: "Pesonalized workout programms, plans and online personal training sessions.",
    cardButton: "Learn more",
    link: "/workoutplan"
},
    {
        id: 2,
        img: mealplan,
        title: "MEAL PLAN",
        text: "Your diet analysis, recomendations and meal plans with recipes.",
        cardButton: "Learn more", 
        link: "/mealplan"
    },
            {
                id: 3,
                img: kickstarter,
                title: "FITDAY KICKSTARTER",
                text: "3 day intensive bootcamp with online workouts, meal plan and personal cosultation.",
                cardButton: "Learn more",
                link: "/kickstarter"
            },
                    {
                        id: 4,
                        img: fitdayapp,
                        title: "FITDAY APP",
                        text: "Beautiful app to plan your day, workouts and meals and achieve goals like a pro!",
                        cardButton: "Learn more",   
                        link: "/fitdayapp"
                    },
];
const mailingP1 = "I am constantly working on new fun mobile app projects! Expect cool health planners and easy to use fitness timers and even some surprise app for couples 🤫😉";
const mailingP2 = "Be the first one to try new products and challenges and even get free access to some online group trainings! Leave your email and I will let you know first!";
const about = "About me..";
const aboutText = "One thing you should know about me - I love learning new things. I have done it my whole life and I enjoy it. My teachers always said that I have a technical mind. Computers and numbers are my friends. My first field of study was engineering. I have a degree in Civil Engineering and it gave me a solid foundation for everything else I learned. Next degree (that I obtained alongside with engineering) was fitness. I love movement and biomechanics as much as mathematics (there is math everywhere, you know!). After graduating I found my dream job. It was with people who I admire, in a very creative an inspirational fitness studio. I worked there for 10 years. I trained hundreds of people. During this time I also graduated again and got masters degree in nutrition science. My love for computers and numbers never went away though, thats why right now I spend my free time learning coding and developing software. I hope now you know a little more about me!"






export {greeting, greetingDescription, cardTexts, mailingP1, mailingP2, about, aboutText};