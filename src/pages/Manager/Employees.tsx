import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAccountStore } from '../../Store/store';
import { getDetailedEmployeesList } from '../../services/userApi';
import DataGrid from '../../components/DataGrid';
import Popup from '../../components/Popup';

const Employees:React.FC = () => {

  const [employeeEditPopup,setEmployeeEditPopup]=useState(false);
  const user = useAccountStore((state) => state.account);
const {data:employees}=useQuery({
  queryFn:()=>{
    return getDetailedEmployeesList();
  },
  queryKey:["employees"]
})

const toggleEditEmployeePopup = ({employeeId})=>{
  
  setEmployeeEditPopup((state)=>!state);
}


const tableHeaders=[
  {key:1,label:"name"},
  {key:1,label:"role"},
  {key:1,label:"name"},
]

  return (
    <div className='p-8'>
      

{employees&&<DataGrid toggleEditEmployeePopup={toggleEditEmployeePopup}  data={employees} headers={tableHeaders}/>}

<Popup 
setEmployeeEditPopup={setEmployeeEditPopup}
employeeEditPopup={employeeEditPopup}/>

    </div>
  )
}

export default Employees