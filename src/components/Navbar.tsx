import React, { useEffect, useState } from "react";
import NavbarLinks from "../Constants/NavbarLinks";
import { Link } from "react-router-dom";
import { useAccountStore } from "../Store/store";

const Navbar: React.FC = () => {
  const user = useAccountStore((state) => state.account);
  console.log("user");
  console.log(user)
  const [isActive,setIsActive]=useState<boolean>(false);

const isNavbarActive = ()=>{
window.scrollY>0 ? setIsActive(true): setIsActive(false);
}

useEffect(()=>{

  window.addEventListener("scroll",isNavbarActive);
  return()=>{
    window.removeEventListener("scroll",isNavbarActive)

}
},[]);
console.log(isActive)

  return (
    <nav className={`hidden z-50 h-24  px-12 xl:px-0 lg:block  sticky top-0 ${isActive && "bg-white  transition-all delay-100 border-b border-slate-200 shadow-sm"}`}>
      <section className="flex justify-between  max-w-7xl mx-auto items-center h-full">
        <div className={`text-slate-900 ${isActive && "text-gray-700"}`}>
          <Link to="/">
            <h1 className="text-2xl font-bold font-navbarFont ">
              Groomer <span className="text-orange-700 text-2xl">.</span>
            </h1>
          </Link>
        </div>
        <div className="text-slate-900  flex items-center">
          <ul className={`flex gap-14 font-semibold text-base mr-10 ${isActive && "text-gray-800 transition-all delay-100"}`}>
            {NavbarLinks.map(({ label, link }) => {
              return (
                <Link 
                to={link} 
                key={label}
                className={`hover:text-blue-800 transition-all hover:border-b hover:border-indigo-300 ${isActive && "border-none"}`}
                >
                  <li>{label}</li>
                </Link>
              );
            })}
          </ul>
          {!user ? (
            <Link to="/register">
              <button className={`border   px-5 py-1.5 rounded-sm hover:bg-blue-500 hover:border-blue-600 hover:text-white font-semibold border-blue-500 transition-all ${isActive && "text-white font-semibold transition-all delay-100 bg-blue-500"}`}>
                Dołącz
              </button>
            </Link>
          ) : (
            <button className="border px-4 py-1 rounded ">Logout</button>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
