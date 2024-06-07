import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, Outlet } from 'react-router-dom'
import NavItem from '../pages/Manager/components/NavItem'
import NavItemCollapse from '../pages/Manager/components/NavItemCollapse'
import { MdCategory, MdDashboard, MdPeopleAlt } from 'react-icons/md'
import { FaComments, FaHashtag } from 'react-icons/fa'
import { AiFillDashboard } from 'react-icons/ai'


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
      link: "/admin",
      icon: <AiFillDashboard className="text-xl" />,
      name: "dashboard",
      type: "link",
    },
  
    {
      title: "Comments",
      link: "/admin/comments",
      icon: <FaComments className="text-xl" />,
      name: "comments",
      type: "link",
    },
  
    {
      title: "Posts",
      content: [
        { title: "New", link: "/admin/posts/new" },
        { title: "Manage", link: "/admin/posts/manage" },
      ],
      icon: <MdDashboard className="text-xl" />,
      name: "posts",
      type: "collapse",
    },
    {
      title: "Categories",
      content: [
        { title: "New", link: "/admin/categories/new" },
        { title: "Manage", link: "/admin/categories/manage" },
      ],
      icon: <MdCategory className="text-xl" />,
      name: "categories",
      type: "collapse",
    },
    {
      title: "Tags",
      content: [
        { title: "New", link: "/admin/tags/new" },
        { title: "Manage", link: "/admin/tags/manage" },
      ],
      icon: <FaHashtag className="text-xl" />,
      name: "tags",
      type: "collapse",
    },
  
  
    {
      title: "Users",
      link: "/admin/users",
      icon: <MdPeopleAlt className="text-xl" />,
      name: "users",
      type: "link",
    },
  ];



const ManagerLayout:React.FC = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [activeNavName, setActiveNavName] = useState("dashboard");
   

  

  return (
    <div className='max-w-[1400px] mx-auto'>
        <Navbar/>
        <div className='flex py-10'>
            <div className='min-w-[260px] border-2 flex flex-col h-fit sticky top-[95px] '>
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
            </div>
<div className='flex-1'>
 <Outlet/>
</div>


        </div>
    </div>
  )
}

export default ManagerLayout