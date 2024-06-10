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

  const config = {
    withCredentials: true
  };

  const { data } = await axios.post(
    "http://localhost:3000/api/users/login",
    formData,config
  );
  return data;
};

export const getAllServices = async()=>{
  try{
const {data}= await axios.get("http://localhost:3000/api/services/")
return data;
  }catch(error){
    console.log(`Error:${error}`)
  }
}

export const getAllEmployees = async()=>{
  try{
    const {data}= await axios.get("http://localhost:3000/api/users/employees");
    return data;
  }catch(error){
    console.log(`ERROR:${error}`)
  }
}



export const getDetailedEmployeesList = async({token}:{token:string})=>{
  try{
    const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }

    const {data}= await axios.get("http://localhost:3000/api/admin/employees",config);
    return data;
  }catch(error){
    console.log(`ERROR:${error}`)
  }
}

export const getDetailedCustomersList = async({token}:{token:string})=>{
  try{
    const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
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