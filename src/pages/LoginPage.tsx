import React from "react";
import { useMutation } from "react-query";
import { login } from "../services/userApi";
import LoginForm from "../forms/LoginForm";
import { useAccountStore } from "../Store/store";

interface ILoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const setUserAccount = useAccountStore((state) => state.setAccount);
  const { mutate } = useMutation({
    mutationFn: ({ formData }: { formData: ILoginFormData }) => {
      return login({ formData });
    },
    onSuccess: (data) => {
      setUserAccount(data);
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

        <LoginForm handleSave={handleSave} />
      </div>
    </section>
  );
};

export default LoginPage;
