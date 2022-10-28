import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./routes/Home";
import Contacts from "./routes/Contacts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./routes/About";
import WorkoutPlan from "./routes/WorkoutPlan";
import MealPlan from "./routes/MealPlan";
import Kickstarter from "./routes/Kickstarter";
import FitdayApp from "./routes/FitdayApp";


function App() {
    
  
    return (
<div class="d-flex flex-column min-vh-100">
<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<WorkoutPlan />} path="/workoutplan" />
        <Route element={<MealPlan />} path="/mealplan" />
        <Route element={<Kickstarter />} path="/kickstarter" />
        <Route element={<FitdayApp />} path="/fitdayapp" />
       
       
    </Routes>
    <Footer />
</BrowserRouter>
</div>

    );
  }
  
  export default App;