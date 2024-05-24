import React from "react";
import ServiceCard from "./OurCommitmentCard";
import PopularServices from "../Constants/ExclusiveServices";
import images from "../Constants/imaegs";
import ExclusiveServices from "../Constants/ExclusiveServices";
import ExclusiveComboCard from "./ExclusiveComboCard";

const ExclusiveCombosContainer: React.FC = () => {
  return (
    <section className="w-full bg-[#192733] ">
      <img src={images.LayerImage2} alt="" />
      <div className="max-w-[1400px] mx-auto ">
        <h2 className="text-3xl  font-heroSectionFont text-slate-100 font-semibold">
          Our exclusive offer
        </h2>
        <div className="flex gap-5 w-full py-6 flex-wrap ">
          {ExclusiveServices.map((service) => {
            return (
              <ExclusiveComboCard
                service={service}
                className="w-full  md:w-[calc(45.8%-20px)]   xl:w-[calc(22.33%-21px)]  "
              />
            );
          })}
        </div>
      </div>
      <img src={images.LayerImage3} alt="" />
    </section>
  );
};

export default ExclusiveCombosContainer;
