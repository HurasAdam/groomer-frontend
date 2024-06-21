import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import NavItem from '../pages/Manager/components/NavItem';
import NavItemCollapse from '../pages/Manager/components/NavItemCollapse';
import { Outlet } from 'react-router-dom';
import { TiThList } from 'react-icons/ti';
import { MdPeopleAlt } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { LuScissorsSquare } from 'react-icons/lu';



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
      icon:"",
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




const EmployeeLayout:React.FC = () => {
    const [activeNavName, setActiveNavName] = useState("dashboard");

    return (
        <div className='max-w-[1400px] mx-auto'>
     <Navbar />
            <div className='flex py-10'>
                <div className='min-w-[260px] border-r flex flex-col   '>
                    <ul>
                    {MENU_ITEMS.map((item) => {
                  
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

export default EmployeeLayout