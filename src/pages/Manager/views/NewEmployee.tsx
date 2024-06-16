import React from 'react'
import EmployeeForm from '../forms/EmployeeForm'
import { useMutation } from 'react-query'
import { registerEmployee } from '../../../services/userApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const NewEmployee:React.FC = () => {
const navigate= useNavigate();
const {mutate}=useMutation({
    mutationFn:({formData})=>{
        return registerEmployee({formData});
    },
    onSuccess:()=>{
        toast.success("Konto zostało utworzone");
        navigate("/manage/employees")
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