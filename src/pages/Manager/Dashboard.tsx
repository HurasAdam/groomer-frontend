import React from 'react'
import { useMutation } from 'react-query'
import { createDaySchedule } from '../../services/userApi'



const Dashboard:React.FC = () => {


const {mutate}=useMutation({
  mutationFn:()=>{
    return createDaySchedule()
  }
})

const onSave = ()=>{
  mutate();
}

  return (
    <div>
      <h1>Dashboard</h1>
      <button 
      onClick={onSave}
      className='bg-blue-500 text-white p-2 rounded font-semibold'>Generate</button>
    </div>

  )
}

export default Dashboard