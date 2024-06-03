import React from 'react';
import { useQuery } from 'react-query';
import { useAccountStore } from '../../Store/store';
import { getDetailedEmployeesList } from '../../services/userApi';

const Employees:React.FC = () => {

  const user = useAccountStore((state) => state.account);
const {data}=useQuery({
  queryFn:()=>{
    return getDetailedEmployeesList({token:user?.token});
  }
})

  return (
    <div>Employees</div>
  )
}

export default Employees