
import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import HeroUs from "../Components/HeroUs";
import Footer from "../Components/Footer";
import HomeA from "../Components/HomeA";
import HomeC from "../Components/HomeC";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <HeroUs/>
      <HomeA />
      <HomeC />
      <Footer/>
    </div>
  );
  
};

export default Home