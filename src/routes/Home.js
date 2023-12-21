
import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import HeroUs from "../Components/HeroUs";
import Footer from "../Components/Footer";
// import Mid from "../Components/Mid";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <HeroUs/>
      {/* <Mid/> */}
      <Footer/>
    </div>
  );
  
};

export default Home