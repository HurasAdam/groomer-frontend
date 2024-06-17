import React from 'react'
import OnboardingForm from './OnboardingForm'
import { useMutation, useQueryClient } from 'react-query'
import { changeEmployeePassword } from '../../services/userApi'
import { useAccountStore } from '../../Store/store'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const OnboardingPage:React.FC = () => {
const queryClient= useQueryClient();
const navigate = useNavigate();
const setUserAccount = useAccountStore((state) => state.setAccount);
const {mutate,error}=useMutation({
    mutationFn:({formData})=>{
        return changeEmployeePassword({formData})
    },
    onSuccess:(data)=>{
      toast.success(data.message)
    navigate("/")
    },

})

const onSave= ({formData})=>{
mutate({formData})
}

  return (
    <div className='flex-1 '>
<OnboardingForm
errorMessage={error?.response?.data?.message}
onSave={onSave}
/>
    </div>
  )
}

export default OnboardingPage