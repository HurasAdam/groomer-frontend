import axios from "axios";

export const register = async ({ formData }) => {
  //   console.log("LAST ");
  //   console.log(formData);
  const response = await axios.post(
    "http://localhost:3000/api/users/register",
    formData
  );
  return response.data;
};

export const login = async ({ formData }) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/users/login",
    formData
  );
  return data;
};
