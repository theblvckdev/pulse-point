import React from "react";
import HeroComponent from "../components/hero";
import SectionOne from "../components/sectionOne";
import SectionTwo from "../components/sectionTwo";
import SectionThree from "../components/sectionThree";

const Homepage = () => {
  return (
    <>
      <HeroComponent />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Homepage;
