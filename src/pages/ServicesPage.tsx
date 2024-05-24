import React from "react";
import CONSTANTS from "../Constants";
import ServiceCard from "../components/ServiceCard";
import images from "../Constants/imaegs";

const ServicesPage: React.FC = () => {
  return <div className="flex">
  
  <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex flex-row justify-between mb-12  ">
        
        <h2 className="flex-1 text-3xl font-bold mb-5">Zapoznaj się z pełną ofertą naszych usług</h2>
        
       <button className="bg-blue-500 text-white px-2 rounded-lg">Zobacz więcej</button>
        </div>
        
        
        <div className=" flex justify-between  border-slate-900 flex-wrap gap-6">
        {CONSTANTS.POPULAR_SERVICES.map((service)=>{
          return(
        <ServiceCard 
        service={service}
        className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
        />
          )
        })}
        
        </div>
          </div>
  </div>;
};

export default ServicesPage;
