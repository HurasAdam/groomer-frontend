import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getDetailedCustomersList } from '../../services/userApi'
import { useAccountStore } from '../../Store/store';
import DataGrid from '../../components/DataGrid';

const Customers:React.FC = () => {
    const user = useAccountStore((state) => state.account);
    const [customerEditPopup,setCustomerEditPopup]=useState(false);
const {data:customers}=useQuery({
    queryFn:()=>{
        return getDetailedCustomersList({token:user?.token});
    },
    queryKey:["customers"]
})

const tableHeaders=[
    {key:1,label:"name"},
    {key:1,label:"role"},
    {key:1,label:"name"},
  ]


  const toggleEditCustomerPopup = ({employeeId})=>{
    console.log(employeeId)
    setCustomerEditPopup((state)=>!state);
  }
  


  return (
    <div className='p-8'>
        <DataGrid toggleEditEmployeePopup={toggleEditCustomerPopup}  data={customers} headers={tableHeaders}/>
    </div>
  )
}

export default Customers