import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { getService } from '../services/servicesApi'
import { useParams } from 'react-router-dom'
import images from '../Constants/imaegs'
import ReservationForm from '../forms/ReservationForm'
import { getAllEmployees } from '../services/userApi'
import { FaClock } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { utils } from '../utils'
import { createReservation } from '../services/reservationsApi'
import { useAccountStore } from '../Store/store'
import * as types from "../types/index";



const ServiceDetails:React.FC = () => {
    const {id}=useParams();
    const user = useAccountStore((state) => state.account);


    const {data:employees}=useQuery({
        queryFn:()=>{
            return getAllEmployees()
        },
        queryKey:["employees"]
    })


const {data:serviceDetails}=useQuery({
    queryFn:()=>{
        return getService({id})
    },
    queryKey:["serviceDetails"]
})


const {mutate}=useMutation({
    mutationFn:({formData}:{formData:types.IFormData})=>{
        return createReservation({formData,token:user?.token})
    }
})

const onSave = ({ formData }: { formData: types.IFormData })=> {
  mutate({ formData });
};


  return (
    <div className='max-w-[1300px] mx-auto '>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 py-6 px-4">
  <div className='flex flex-col '>
<h1 className=' bg-blue-50 text-3xl font-semibold text-gray-700'>{serviceDetails?.name}</h1>
<ReservationForm 
employees={employees}
serviceId={id}
onSave={onSave}
/>
  </div>


  <div className='flex flex-col border rounded-t-md h-fit'>
<div><img className='rounded-md' src={images.DogBathImage} alt="" /></div>
<div className=''>
   <ul className='flex flex-col gap-3'>
    <li className='flex justify-between text-lg border-b py-2 px-10 '>
        <div className='text-gray-600 font-semibold flex items-center gap-1 '><FaClock/>Czas</div>
        <span className='text-gray-600 font-semibold'>{utils.convertMinutesToHours(serviceDetails?.estimatedTime)}</span>
    </li>
    <li className='flex justify-between text-lg border-b py-2 px-10 '>
        <div className='text-gray-600 font-semibold flex items-center gap-1'><FaCoins/>Koszt</div>
        <span className='text-gray-600 font-semibold'>{serviceDetails?.price} PLN</span>
    </li>
    <li className='flex justify-between text-normal my-5  py-2 px-6 '>
    <span>
        {serviceDetails?.description}
    </span>
  </li>
   </ul>
</div>
  </div>


</div>
    </div>
  )
}

export default ServiceDetails