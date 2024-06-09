import React from 'react'
import ServiceForm from '../forms/ServiceForm'
import { useMutation, useQueryClient } from 'react-query';
import { addNewService } from '../../../services/servicesApi';
import { useAccountStore } from '../../../Store/store';
import toast from "react-hot-toast";




const NewService:React.FC = () => {
    const user = useAccountStore((state) => state.account);
   

    const { mutate,isLoading } = useMutation({
        mutationFn:({formData})=>{
            return addNewService({formData,token:user?.token})
        },
        onSuccess:(data)=>{
          toast.success(data.message);
        },
        onError:(error)=>{
          toast.error("Ups... coś poszło nie tak");
        }
    });
    
      const handleSave = ({ formData }) => {
        mutate({ formData });
      };

  return (
    <div className='px-10 '>
  
        <h2 className='text-2xl font-semibold mb-8'>Dodaj usługę</h2>
        <ServiceForm handleSave={handleSave} isLoading={isLoading}/>
    </div>

  )
}

export default NewService