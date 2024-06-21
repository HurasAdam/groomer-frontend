import React from 'react'
import { useQuery } from 'react-query';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { getEmployeeDetails } from '../../../services/userApi';

const links = [
  {link:"",label:"Informacje ogólne"},
  {link:"workSchedule",label:"Grafik"},
]


const EmployeeDetails:React.FC = () => {

  const {id}=useParams();
  const {pathname}=useLocation();

  return (
    <div>
 <ul className='flex justify-center gap-10'>
{links.map(({link,label})=>{
    const isActive = pathname.includes(link);

  return(
    <Link to={`/manage/employees/employee/${id}/${link}`}>
    <li className={isActive ? "font-semibold":""}>{label}</li>
    </Link>
  )
})}
 </ul>
<Outlet/>
    </div>
  )
}

export default EmployeeDetails