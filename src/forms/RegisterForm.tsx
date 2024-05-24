import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


interface IRegisterFormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface IRegisterFormProps {
  handleSave: ({formData}:{formData:IRegisterFormData}) => void;
}

const RegisterForm: React.FC<IRegisterFormProps> = ({ handleSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    handleSave({ formData: data });
  });

  return (
    <div>
      <form
        className=" w-[40%] mx-auto flex flex-col gap-6 mt-10 flex-1  h-fit"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col">
          <label className="text-slate-500 text-sm" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`py-3 px-3 bg-slate-100 rounded mt-1 outline-none ${
              errors.name ? "border border-rose-600" : ""
            }`}
          />
          {errors.name && (
            <span className="text-xs text-rose-500">
              {errors.name?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500 text-sm" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("userName", { required: "username is required" })}
            className={`py-3 px-3 bg-slate-100 rounded mt-1 outline-none ${
              errors.userName ? "border border-rose-600" : ""
            }`}
          />
          {errors.userName && (
            <span className="text-xs text-rose-500">
              {errors.userName?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500 text-sm" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "email is required" })}
            className={`py-3 px-3 bg-slate-100 rounded mt-1 outline-none ${
              errors.email ? "border border-rose-600" : ""
            }`}
          />
          {errors.email && (
            <span className="text-xs text-rose-500">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500 text-sm" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "password is required" })}
            className={`py-3 px-3 bg-slate-100 rounded mt-1 outline-none ${
              errors.email ? "border border-rose-600" : ""
            }`}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500 text-sm" htmlFor="password">
            Confirm password
          </label>
          <input
            type="password"
            id="password"
            {...register("confirmPassword", {
              validate: (value) => {
                const password = watch("password");
                if (password !== value) return "Paswords do not match";
                return true;
              },
            })}
            className={`py-3 px-3 bg-slate-100 rounded mt-1 outline-none ${
              errors.password || errors.confirmPassword
                ? "border border-rose-600 "
                : ""
            }`}
          />
          {errors.confirmPassword && (
            <span className="text-xs text-rose-500">
              {errors.confirmPassword?.message}
            </span>
          )}
        </div>
        <span className="text-gray-500 text-sm">Already have an account? <Link className="text-blue-800 hover:text-blue-500 ml-1" to="/login">Login</Link></span>
        <button
          type="submit"
          className="mt-7 border py-2 bg-indigo-400 font-semibold text-white text-xl rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
