import React from 'react'
import Navbar from '../components/Navbar'
import { Link, Outlet } from 'react-router-dom'


const AdminNavbarLinks=[
    {
        label:"Dasboard",
        link:"/manage/"
    },
    {
        label:"Rezerwacje",
        link:"/manage/reservations"
    },
    {
        label:"Usługi",
        link:"/manage/services"
    },
    {
        label:"Pracownicy",
        link:"/manage/employees"
    },
    {
        label:"Użytkownicy",
        link:"/manage/customers"
    },
    {
        label:"Powrót",
        link:"/"
    },

]

const ManagerLayout:React.FC = () => {


  return (
    <div className='max-w-[1400px] mx-auto'>
        <Navbar/>
        <div className='flex py-10'>
            <div className='min-w-[260px] border-2 flex flex-col h-fit sticky top-[95px] '>
                <ul>
                    {AdminNavbarLinks.map(({label,link})=>{
                        return(
      <Link  to={link}>
                            <li 
                            className='text-gray-600 p-4 hover:bg-sky-200 font-semibold cursor-pointer '>
                    {label}

                            </li>
      </Link>
                        )
                    })}
                </ul>
            </div>
<div className='flex-1'>
 <Outlet/>
</div>


        </div>
    </div>
  )
}

export default ManagerLayout