import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"


const NavItemCollapse: React.FC = ({ content, title, icon, name, activeNavName, setActiveNavName }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const {pathname}=useLocation();


    useEffect(() => {
        if (activeNavName !== name) {
            setIsChecked(false)
        }
    }, [activeNavName, name])

    return (
        <div className=" bg-base-200 min-h-0 rounded-none py-2">
            <input
            id={title}
                type="checkbox"
                className="min-h-0 py-0 hidden"
                checked={name === activeNavName}
                onChange={() => {
                    setActiveNavName(name);
                    setIsChecked(!isChecked);
                }}
            />
            <label
            htmlFor={title}
                className={` font-medium min-h-0 py-0 pl-0 
                flex items-center gap-x-2 text-lg ${name === activeNavName ? "font-bold text-primary" : "font-semibold text-[#A5A5A5]"}`}>
                {icon}
                {title}

            </label>
            <div className="">
{      name===activeNavName &&          <div className="mt-2 flex flex-col gap-y-2 ">
                    {content?.map((item) => {
                  const isActive = pathname === item?.link
                        return (
                <div className="px-7  py-1 font-semibold text-slate-500">
                   <Link to={item?.link} className={isActive? "text-blue-800":"text-slate-400"}>
                  {item?.title}
                   </Link>
                </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default NavItemCollapse