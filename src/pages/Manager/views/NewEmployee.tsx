import React from 'react'
import EmployeeForm from '../forms/EmployeeForm'
import { useMutation } from 'react-query'
import { registerEmployee } from '../../../services/userApi'

const NewEmployee:React.FC = () => {

const {mutate}=useMutation({
    mutationFn:({formData})=>{
        return registerEmployee({formData});
    }
})

const handleSave=({formData})=>{
    return mutate({formData})
}


  return (
    <div className='px-10'>
        <EmployeeForm
        handleSave={handleSave}
        />
    </div>
  )
}

export default NewEmployee;