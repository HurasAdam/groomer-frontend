import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


import { UserRole } from "../../../Constants/enums";
import CONSTANTS from "../../../Constants";
import NavbarLinks from "../../../Constants/NavbarLinks";
import { useAccountStore } from "../../../Store/store";



interface NavbarProps {
  isLoading: boolean;
  handleLogout:()=>void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoading,handleLogout }) => {
  const user = useAccountStore((state) => state.account);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [profileDropdown, setProfileDropdown] = useState<boolean>(false);

  const toggleDropdownHandler = (): void => {
    setProfileDropdown((prevState) => !prevState);
  };

  const isNavbarActive = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isNavbarActive);
    return () => {
      window.removeEventListener("scroll", isNavbarActive);
    };
  }, []);

  return (
    <nav
      className={`hidden z-50 h-24  px-12 xl:px-0 lg:block  sticky top-0 ${
        isActive && "bg-white  transition-all delay-100 border-b border-slate-200 shadow-sm"
      }`}
    >
      <section className="flex justify-between  max-w-7xl mx-auto items-center h-full">
        <div className={`text-slate-900 ${isActive && "text-gray-700"}`}>
          <Link to="/">
            <h1 className="text-2xl font-bold font-heroSectionFont flex flex-col items-center ">
              Admin panel 
             <span className="text-lg text-slate-400">Groomer</span>
            </h1>
          </Link>
        </div>
        <div className="text-slate-900  flex items-center">
          <ul
            className={`flex gap-14 font-semibold text-base mr-10 ${
              isActive && "text-gray-800 transition-all delay-100"
            }`}
          >
            {NavbarLinks.map(({ label, link }) => {
              return (
                <Link
                  to={link}
                  key={label}
                  className={`hover:text-blue-800 transition-all hover:border-b hover:border-indigo-300 ${
                    isActive && "border-none"
                  }`}
                >
                  <li>{label}</li>
                </Link>
              );
            })}
          </ul>
          {isLoading ? (
            <div className="text-gray-500 bg-slate-300 w-9 h-9 rounded-full"></div>
          ) : !user ? (
            <Link to="/register">
              <button
                className={`border   px-5 py-1.5 rounded-sm hover:bg-blue-500 hover:border-blue-600 hover:text-white font-semibold border-blue-500 transition-all ${
                  isActive && "text-white font-semibold transition-all delay-100 bg-blue-500"
                }`}
              >
                Dołącz
              </button>
            </Link>
          ) : (
            <div className="relative group  ">
              <div className="flex flex-col items-center">
                <button
                  className="bg-sky-100 w-9 font-semibold text-gray-500 h-9 rounded-full"
                  onClick={toggleDropdownHandler}
                >
                  {user?.username.charAt(0)}
                </button>
                <div
                  className={`lg:hidden  transition-all duration-500 pt-4 lg:absolute lg:bottom-0  lg:transform lg:translate-y-full lg:group-hover:block w-[180px]  `}
                >
                  {profileDropdown && (
                    <ul className="bg-slate-200 lg:bg-white   text-center flex flex-col  shadow-lg rounded-lg overflow-hidden ">
                      {user?.role === UserRole.CLIENT &&
                        CONSTANTS.DROPDOWNLINKS.client.map(({ link, label }) => {
                          return (
                            <li
                              className="py-1.5 px-5 hover:bg-blue-200 hover:font-semibold"
                              key={label}
                            >
                              <Link to={link}>{label}</Link>
                            </li>
                          );
                        })}

                      {user?.role === UserRole.ADMIN &&
                        CONSTANTS.DROPDOWNLINKS.admin.map(({ link, label }) => {
                          return (
                            <li
                              className="py-1.5 px-5 hover:bg-blue-200 hover:font-semibold"
                              key={label}
                            >
                              <Link to={link}>{label}</Link>
                            </li>
                          );
                        })}

                      <li className="py-1.5 px-5 hover:bg-blue-200  hover:font-semibold">
                        <button onClick={handleLogout}>
                          Wyloguj
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
