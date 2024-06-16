import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { logout, validateToken } from "../services/userApi";
import { useAccountStore } from "../Store/store";


const RootLayout:React.FC = () => {
  const user = useAccountStore((state) => state.account);
  const setUserAccount = useAccountStore((state) => state.setAccount);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

const {data,isLoading}=useQuery({
  queryFn:()=>{
    return validateToken();
  },
  queryKey:["validateToken"],
  
  onSuccess:(userData)=>{
    setUserAccount(userData)
  },
  onError:()=>{
    setUserAccount(undefined);
  },
  retry:false
}
)

if(user && user?.mustChangePassword){
  navigate("/onboard-settings")
}



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
    <div className=" flex flex-col min-h-screen w-full ">
      <Navbar isLoading={isLoading} handleLogout={handleLogout} />
      <section className="flex-1 h-screen ">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
