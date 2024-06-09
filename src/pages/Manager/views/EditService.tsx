import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import {getServiceDetailed, updateService } from '../../../services/servicesApi';
import ServiceForm from '../forms/ServiceForm';
import { useAccountStore } from '../../../Store/store';
import { FiEdit } from "react-icons/fi";

const EditService:React.FC = () => {
    const {id}=useParams();
    const user = useAccountStore((state) => state.account);

const {data:serviceDetails}=useQuery({
    queryFn:()=>{
        return getServiceDetailed({id,token:user?.token})
    },
    queryKey:[id]
})

const {mutate}=useMutation({
    mutationFn:({formData,serviceId})=>{
        return updateService({formData,serviceId,token:user?.token})
    },
    onSuccess:(data)=>{
      toast.success(data.message);
    }
})

const handleSave=({formData,serviceId})=>{
    mutate({formData,serviceId})

}

  return (
    <div className='px-8'>
    <h2 className='text-2xl font-semibold mb-8 flex items-center gap-1.5 text-slate-600  px-4 py-4 border-b-[1px] '>
        <FiEdit/>
        Edytuj Usługę
        </h2>
  {serviceDetails&&  <ServiceForm handleSave={handleSave} serviceDetails={serviceDetails}/>}
    </div>
  )
}

export default EditService