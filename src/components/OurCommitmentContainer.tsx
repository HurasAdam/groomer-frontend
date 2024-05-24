import React from "react";
import images from "../Constants/imaegs";
import OurCommitmentCard from "./OurCommitmentCard";
import OurCommitmentList from "../Constants/OurCommitmentList";

const OurCommitmentContainer: React.FC = () => {
  return (
    <section className="w-full  pt-12  ">
      <div className="max-w-[1300px] mx-auto  ">
        <h2 className="text-3xl font-extrabold font-navbarFont text-slate-700">
          You need it, we've got it
        </h2>
        <div className="flex gap-5 w-full py-6 flex-wrap md:px-10 lg:px-4">
          {OurCommitmentList.map((service,index) => {
            return (
              <OurCommitmentCard
              key={index}
                service={service}
                className="w-full md:w-[calc(50%-20px)]  lg:w-[calc(25.33%-21px)] xl:w-[calc(25.33%-21px)]   "
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentContainer;
