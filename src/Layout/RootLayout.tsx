import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import { validateToken } from "../services/userApi";
import { useAccountStore } from "../Store/store";


const RootLayout:React.FC = () => {
  const user = useAccountStore((state) => state.account);
  const setUserAccount = useAccountStore((state) => state.setAccount);

const {data,isLoading}=useQuery({
  queryFn:()=>{
    return validateToken();
  },
  
  onSuccess:(userData)=>{
    setUserAccount(userData)
  },
  retry:false
}
)

console.log(data);

  return (
    <div className=" flex flex-col min-h-screen w-full ">
      <Navbar isLoading={isLoading} />
      <section className="flex-1 h-screen ">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
