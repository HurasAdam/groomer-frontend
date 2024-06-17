import React from 'react'
import OnboardingForm from './OnboardingForm'
import { useMutation, useQueryClient } from 'react-query'
import { changeEmployeePassword } from '../../services/userApi'
import { useAccountStore } from '../../Store/store'
import { useNavigate } from 'react-router-dom'

const OnboardingPage:React.FC = () => {
const queryClient= useQueryClient();
const navigate = useNavigate();
const setUserAccount = useAccountStore((state) => state.setAccount);
const {mutate}=useMutation({
    mutationFn:({formData})=>{
        return changeEmployeePassword({formData})
    },
    onSuccess:(data)=>{
    navigate("/")
    }
})

const onSave= ({formData})=>{
mutate({formData})
}

  return (
    <div className='flex-1 '>
<OnboardingForm
onSave={onSave}
/>
    </div>
  )
}

export default OnboardingPage