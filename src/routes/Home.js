
import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import HeroUs from "../Components/HeroUs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <HeroUs/>
      <Footer/>
    </div>
  );
  
};

export default Home