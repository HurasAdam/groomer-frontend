import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import images from '../Constants/imaegs'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { logout, validateToken } from '../services/userApi'
import { useAccountStore } from '../Store/store'

const AccountOnboardingLayout:React.FC = () => {
const queryClient=useQueryClient();
const navigate = useNavigate();
    const setUserAccount = useAccountStore((state) => state.setAccount);
    const user = useAccountStore((state) => state.account);
    const {data,isLoading}=useQuery({
        queryFn:()=>{
          return validateToken();
        },
        queryKey:["validateToken"],
        
        onSuccess:(userData)=>{
          setUserAccount(userData)
        },
        onError:()=>{
          setUserAccount(undefined);
        },
        retry:false
      }
      )

      if(!user || !user?.mustChangePassword){
        navigate("/")
      }

      const {mutate}=useMutation({
        mutationFn:()=>{
          return logout()
        },
        onSuccess:()=>{
          queryClient.invalidateQueries("validateToken");
        }
      })
      
      const handleLogout=()=>{
        return mutate()
      }



  return (
    <div className=" flex flex-col min-h-screen w-full max-w-[1400px] mx-auto ">
        <div className='flex justify-end py-2'>
            <button 
            onClick={handleLogout}
            className='bg-blue-200 py-1 px-3 font-semibold rounded'>Wyloguj</button>
        </div>

      <section className="flex-1 h-screen flex gap-10 p-10 lg:p-0 ">
      <div className='hidden lg:flex w-1/2 bg-indigo-100  flex-col justify-between  my-5 '>
      <h2 className='text-7xl font-bold text-center mt-8  text-blue-500'>Witaj w Groomer</h2>
    <img src={images.OnboardingImage} alt="" />
 </div>
        <Outlet />
      </section>

    </div>
  )
}

export default AccountOnboardingLayout