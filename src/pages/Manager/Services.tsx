import React from 'react'
import { useQuery } from 'react-query'
import { getAllServices } from '../../services/userApi'
import ServiceCard from '../../components/ServiceCard';

const Services:React.FC = () => {

const {data:servicess}=useQuery({
  queryFn:()=>{
    return getAllServices();
  },
  queryKey:["services"]
});

  return (
    <div className='px-8 py-4'>
      {servicess?.map((service)=>{
        return(
          <ServiceCard manage={true} service={service}/>
        )
      })}
    </div>
  )
}

export default Services