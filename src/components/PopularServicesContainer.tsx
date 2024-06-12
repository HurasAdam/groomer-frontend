import React, { useState } from "react";
import CONSTANTS from "../Constants";


import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { getAllServices } from "../services/userApi";
import { useQuery } from "react-query";

const PopularServicesContainer: React.FC = () => {

const [animalFilter,setAnimalFilter]=useState("")

  const {data:services}=useQuery({
    queryFn:()=>{
      return getAllServices("popular",animalFilter);
    },
    queryKey:["services",animalFilter]
  })
  
  return (
    services?.length>0 ?<>
      <section className={ `w-full mx-auto flex flex-col pt-24 pb-20 } ` }>
      
      
  
      <div className="max-w-[1300px] mx-auto py-10">
        
      <div className="flex flex-row justify-between mb-12  ">
      
      <h2 className="flex-1 text-3xl font-bold mb-5">Popularne Usługi</h2>
 
     <button className="bg-blue-500 text-white px-2 rounded-lg">Zobacz więcej</button>
      </div>
      <div className="flex justify-end my-10 ">
<select className=" w-[100px] bg-blue-100 rounded-md font-semibold " onChange={(e)=>setAnimalFilter(e.target.value)}>
  <option defaultChecked value="">Wszystkie</option>
  <option className="w-[200px]" value="pies">Pies</option>
  <option className="p-4"  value="kot">Kot</option>
</select>
      </div>
      
      <div className={`${services && services.length<3 ? "flex min-w-[1300px] " : "flex justify-between flex-wrap"} border-slate-900 flex-wrap gap-6  `}>
      {services?.map((service,index)=>{
        return(
      <ServiceCard 
      key={index}
      service={service}
      className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
      />
        )
      })}
      
      </div>
        </div>
      <Link to="/services" className="bg-blue-600 w-fit mx-auto font-semibold text-white py-3 px-3 rounded-lg ">Zobacz więcej</Link>
          </section>
          </>:<></>
        )
  
};

export default PopularServicesContainer;
