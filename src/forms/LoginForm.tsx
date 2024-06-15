import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface ILoginFormProps {
  handleSave: (formData: { email: string; password: string }) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ handleSave,isEmployee,setIsEmployee }) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    handleSave({ formData: data });
  });

  return (
    <div className="h-auto">
      <form
        className=" w-[40%] mx-auto flex flex-col gap-7 mt-16"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col">
          <label className="text-slate-500" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email", { required: "email is required" })}
            className="py-3 px-3 bg-slate-100 rounded mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "password is required" })}
            className="py-3 px-3 bg-slate-100 rounded mt-1"
          />
        </div>
        <div className="flex items-center gap-1">
        <label className="text-slate-500 text-xs" htmlFor="employee">
            pracownik
          </label>
          <input 
       onChange={() => setIsEmployee((prev) => !prev)}
          id="employee"
          type="checkbox" />
        </div>
        <button
          type="submit"
          className="mt-7 border py-2 bg-emerald-400 font-semibold text-white text-xl rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
