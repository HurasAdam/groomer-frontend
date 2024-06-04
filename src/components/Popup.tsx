import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface IProps{
    employeeEditPopup:boolean;
    setEmployeeEditPopup: (value: boolean) => void;
}

const Popup:React.FC<IProps> = ({employeeEditPopup,setEmployeeEditPopup}) => {

  return (
    <>

{ employeeEditPopup&& (
    <div className='popup'>

<div className='h-screen w-screen fixed top-0 left-0 bg-black/40 z-50 backdrop-blur-sm'>

<div className='fixed top-[35%] left-1/2 rounded-md -translate-x-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rouded-md duration-200 w-[400px]'>

    {/* Header section */}
    <div className='flex items-center justify-between'>

<div>
    <h1 className='text-gray-900 dark:text-gray-50'>Edit User</h1>
</div>
<div>
    <IoCloseOutline 
    className='text-2xl cursor-pointer hover:text-orange-600 transition-all dark:text-gray-50'
    onClick={()=>setOrderPopup(false)}
    />
</div>
    </div>
    {/* Form section */}
    <div className='mt-4 '>
<input 
className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
placeholder='Username'
type="text" />

<input 
className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
placeholder='Email'
type="text" />

<input 
className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
placeholder='Role'
type="text" />

<div className='flex justify-center'>
    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full'>
        Order Now
    </button>
</div>
    </div>
</div>
</div>


    </div>
)}
    </>
  )
}

export default Popup