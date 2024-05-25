import React from "react";
import CONSTANTS from "../Constants";
import ServiceCard from "../components/ServiceCard";
import images from "../Constants/imaegs";
import { useQuery } from "react-query";
import { getAllServices } from "../services/userApi";

const ServicesPage: React.FC = () => {

const {data}=useQuery({
  queryFn:()=>{
    return getAllServices();
  },
  queryKey:["services"]
})

console.log(data)


  return <div className="flex">
  
  <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex flex-row justify-between mb-12  ">
        
        <h2 className="flex-1 text-3xl font-bold mb-5">Zapoznaj się z pełną ofertą naszych usług</h2>
        
      <div className="flex items-end gap-2">
        <input type="text" className="outline-none px-4 py-2 bg-slate-100  rounded" />
      <button className="bg-blue-500 text-white w-fit px-2 py-2 rounded-lg">szukaj</button>
      </div>
        </div>
        
        
        <div className=" flex justify-between  border-slate-900 flex-wrap gap-6">
        {data&&data.map((service)=>{
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
