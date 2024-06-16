import React from 'react'
import { Outlet } from 'react-router-dom'
import images from '../Constants/imaegs'

const AccountOnboardingLayout:React.FC = () => {
  return (
    <div className=" flex flex-col min-h-screen w-full max-w-[1400px] mx-auto ">
        <div>ASD</div>

      <section className="flex-1 h-screen flex  ">
      <div className='w-1/2 bg-indigo-100 flex flex-col justify-between  my-5'>
      <h2 className='text-7xl font-bold text-center mt-8  text-blue-500'>Witaj w Groomer</h2>
    <img src={images.OnboardingImage} alt="" />
 </div>
        <Outlet />
      </section>

    </div>
  )
}

export default AccountOnboardingLayout