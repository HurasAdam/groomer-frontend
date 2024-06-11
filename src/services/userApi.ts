import axios from "axios";
import { IEmployee, IService } from "../types";

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

  const config = {
    withCredentials: true
  };

  const { data } = await axios.post(
    "http://localhost:3000/api/users/login",
    formData,config
  );
  return data;
};

export const getAllServices = async():Promise<IService[]>=>{
  try{
const {data}= await axios.get("http://localhost:3000/api/services/")
return data;
  }catch(error){
    console.log(`Error:${error}`)
    return [];
  }
}

export const getAllEmployees = async():Promise<IEmployee[]>=>{
  try{
    const {data}= await axios.get("http://localhost:3000/api/users/employees");
    return data;
  }catch(error){
    console.log(`ERROR:${error}`)
    return []
  }
}



export const getDetailedEmployeesList = async()=>{
  try{
    const config = {
withCredentials:true

  }

    const {data}= await axios.get("http://localhost:3000/api/admin/employees",config);
    return data;
  }catch(error){
    console.log(`ERROR:${error}`)
  }
}

export const getDetailedCustomersList = async()=>{
  try{
    const config = {
   withCredentials:true
  }

    const {data}= await axios.get("http://localhost:3000/api/admin/customers",config);
    return data;
  }catch(error){
    console.log(`ERROR:${error}`)
  }
}

export const validateToken = async()=>{
const config = {
  withCredentials:true,

}
  const {data}= await axios.post("http://localhost:3000/api/auth/validateToken",{},config);
  return data;
}


export const validateAdminPermissions = async()=>{
  const config = {
    withCredentials:true,
  }
  const {data}= await axios.get("http://localhost:3000/api/admin/auth/adminValidate",config)
  return data;
}

export const logout =async()=>{
  const config = {
    withCredentials:true
  }
  const {data}= await axios.post("http://localhost:3000/api/auth/logout",{},config);
  return data;
}