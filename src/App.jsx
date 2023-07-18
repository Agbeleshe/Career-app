import React from "react";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Categories from "./components/Categories.jsx";
import Footer from "./components/Footer.jsx";



function App() {
  return (
    <div className="container" >
        <Nav/>
        <Hero/>
        <Services/>
        <Categories/>
        <Footer/>
    </div>
  );
}

export default App;
