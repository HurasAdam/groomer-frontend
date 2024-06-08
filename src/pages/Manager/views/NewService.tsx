import React from 'react'
import ServiceForm from '../forms/ServiceForm'
import { useMutation } from 'react-query';
import { addNewService } from '../../../services/servicesApi';
import { useAccountStore } from '../../../Store/store';





const NewService:React.FC = () => {
    const user = useAccountStore((state) => state.account);

    const { mutate } = useMutation({
        mutationFn:({formData})=>{
            return addNewService({formData,token:user?.token})
        }
    });
    
      const handleSave = ({ formData }) => {
        mutate({ formData });
      };

  return (
    <div className='px-10 '>
  
        <h2 className='text-2xl font-semibold mb-8'>Dodaj usługę</h2>
        <ServiceForm handleSave={handleSave}/>
    </div>

  )
}

export default NewService