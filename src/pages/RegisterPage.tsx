import React from "react";
import RegisterForm from "../forms/RegisterForm";
import { useMutation } from "react-query";
import { register } from "../services/userApi";

const RegisterPage: React.FC = () => {
  const { mutate } = useMutation({
    mutationFn: ({ formData }) => {
      return register({ formData });
    },
  });

  const handleSave = ({ formData }) => {
    mutate({ formData });
  };

  return (
    <section className="w-full  flex-1 ">
      <div className="max-w-[1400px]  mx-auto flex flex-col py-12 ">
        <h2 className="mx-auto text-3xl font-semibold text-slate-600 font-heroSectionFont">
          Create a new account
        </h2>
        <span className="mx-auto text-slate-500">
          please enter your details
        </span>

        <RegisterForm handleSave={handleSave} />
      </div>
    </section>
  );
};

export default RegisterPage;
