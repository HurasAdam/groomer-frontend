import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import NavItem from '../pages/Manager/components/NavItem'
import NavItemCollapse from '../pages/Manager/components/NavItemCollapse'
import { MdCategory, MdDashboard, MdPeopleAlt } from 'react-icons/md'
import { LuScissorsSquare } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { TiThList } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { logout, validateAdminPermissions } from '../services/userApi'
import Navbar from '../pages/Manager/components/Navbar'
import { useAccountStore } from '../Store/store'


// const AdminNavbarLinks=[
//     {
//         label:"Dasboard",
//         link:"/manage/",
//         type:"link"
//     },
//     {
//         label:"Rezerwacje",
//         link:"/manage/reservations",
//             type:"link"
//     },
//     {
//         label:"Usługi",
//         link:"/manage/services",
//         content:[
//             {label:"Nowa usługa",link:"manage/services/new"},
//             {label:"Lista usług", link:"manage/services/list"}
//         ],
//             type:"collapse"
//     },
//     {
//         label:"Pracownicy",
//         link:"/manage/employees"
//     },
//     {
//         label:"Użytkownicy",
//         link:"/manage/customers"
//     },
//     {
//         label:"Powrót",
//         link:"/"
//     },

// ]

const MENU_ITEMS = [
    {
      title: "Dashboard",
      link: "/manage",
      icon: <RxDashboard className="text-xl" />,
      name: "dashboard",
      type: "link",
    },
  
    {
      title: "Rezerwacje",
      link: "/manage/reservations",
      icon: <LuScissorsSquare className="text-xl" />,
      name: "reservations",
      type: "link",
    },
  
    {
      title: "Usługi",
      content: [
        { title: "Zarządzaj usługami", link: "/manage/services" },
        { title: "Dodaj usługę", link: "/manage/services/new" },
   
      ],
      icon: <TiThList className="text-xl" />,
      name: "services",
      type: "collapse",
    },
    {
      title: "Pracownicy",
      content: [
        { title: "Zarządzaj Pracownikami", link: "/manage/employees" },
        { title: "Dodaj Pracownika", link: "/manage/employee/new" },
     
      ],
      icon: <FaRegHandshake className="text-xl" />,
      name: "employees",
      type: "collapse",
    },

  
  
    {
      title: "Klienci",
      link: "/manage/customers",
      icon: <MdPeopleAlt className="text-xl" />,
      name: "customers",
      type: "link",
    },
  ];



const ManagerLayout:React.FC = () => {
  const queryClient = useQueryClient();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [activeNavName, setActiveNavName] = useState("dashboard");
    const setUserAccount = useAccountStore((state) => state.setAccount);
   const navigate = useNavigate();

    const {data,isLoading}=useQuery({
      queryFn:()=>{
        return validateAdminPermissions()
      },
      onSuccess:(userData)=>{
          setUserAccount(userData)
      },
      onError:()=>{
        navigate("/")
        toast.error("Brak uprawnień")
      },
      retry:false
    })
  


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
    <div className='max-w-[1400px] mx-auto'>
 <Navbar handleLogout={handleLogout} isLoading={isLoading}/>
        <div className='flex py-10'>
            <div className='min-w-[260px] border-r flex flex-col   '>
                <ul>
                {MENU_ITEMS.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavItem
                      key={item.title}
                      icon={item.icon}
                      title={item?.title}
                      link={item?.link}
                      name={item?.name}
                      activeNavName={activeNavName}
                      setActiveNavName={setActiveNavName}
                    />
                  );
                } else {
                  return (
                    <NavItemCollapse
                      key={item.title}
                      icon={item.icon}
                      title={item?.title}
                      content={item?.content}
                      name={item?.name}
                      activeNavName={activeNavName}
                      setActiveNavName={setActiveNavName}
                    />
                  );
                }
              })}
                </ul>
                <div className='h-full flex flex-col justify-end'>
                  Powrót
                </div>
            </div>
<div className='flex-1'>
 <Outlet/>
</div>


        </div>
    </div>
  )
}

export default ManagerLayout