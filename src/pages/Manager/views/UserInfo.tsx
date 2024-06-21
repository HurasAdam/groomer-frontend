import React from 'react'
import EmployeeForm from '../forms/EmployeeForm'
import { useQuery } from 'react-query'
import { useLocation, useParams } from 'react-router-dom';
import { getEmployeeDetails } from '../../../services/userApi';

const UserInfo:React.FC = () => {


  const {id}=useParams();
  const {pathname}=useLocation();

  console.log(id)

  const {data,isLoading}=useQuery({
    queryFn:()=>{
      return getEmployeeDetails(id)
    },
    queryKey:["employee",id]
  })

  return (
    <div className='px-10'>
     { data&& <EmployeeForm serviceDetails={data}/>}
    </div>
  )
}

export default UserInfo