import React from "react";
import Hero from "../components/Hero";
import OurCommitmentContainer from "../components/OurCommitmentContainer";
import Introduction from "../components/Introduction";
import ExclusiveCombossContainer from "../components/ExclusiveCombossContainer";
import PopularServicesContainer from "../components/PopularServicesContainer";

const Home: React.FC = () => {
  return (
    <div className="h-auto w-full">
      <Hero />
      <OurCommitmentContainer />
      <Introduction/>
      <PopularServicesContainer />
      <ExclusiveCombossContainer />
    </div>
  );
};

export default Home;
