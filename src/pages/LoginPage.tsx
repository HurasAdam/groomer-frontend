import React, { useState } from "react";
import { useMutation } from "react-query";
import { login, loginEmployee, validateToken } from "../services/userApi";
import LoginForm from "../forms/LoginForm";
import { useAccountStore } from "../Store/store";
import { useNavigate } from "react-router-dom";

interface ILoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [isEmployee,setIsEmployee]=useState(false);

  console.log(isEmployee)
  const setUserAccount = useAccountStore((state) => state.setAccount);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: ({ formData }: { formData: ILoginFormData }) => {
      return isEmployee? loginEmployee({formData}) :login({ formData }) 
    },
    onSuccess: (data) => {
      // localStorage.setItem("user",JSON.stringify(data));
      setUserAccount(data);
navigate("/");

    },
    
  });

  const handleSave = ({ formData }: { formData: ILoginFormData }): void => {
    mutate({ formData });
  };

  return (
    <section className="w-full  ">
      <div className="max-w-[1400px]  mx-auto flex flex-col py-20  ">
        <h2 className="mx-auto text-3xl font-semibold text-slate-600 font-heroSectionFont">
          Welcome back !
        </h2>
        <span className="mx-auto text-slate-500">
          please enter your details
        </span>

        <LoginForm 
        isEmployee={isEmployee}
        setIsEmployee={setIsEmployee}
        handleSave={handleSave} />
      </div>
    </section>
  );
};

export default LoginPage;
