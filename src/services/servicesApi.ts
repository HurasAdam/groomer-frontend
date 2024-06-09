import axios from "axios"

export const getService = async({id})=>{
    const {data}= await axios.get(`http://localhost:3000/api/services/service/${id}`);
    return data;
}


export const addNewService= async({formData,token})=>{

    const config = {
        withCredentials:true,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const {data}= await axios.post(`http://localhost:3000/api/services/create/`,formData,config);
    return data;
}

export const updateService = async({formData,serviceId,token})=>{

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const {data}= await axios.put(`http://localhost:3000/api/admin/update/service/${serviceId}`,formData,config);
    return data;
}

export const getServiceDetailed = async({id,token})=>{

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const {data}= await axios.get(`http://localhost:3000/api/admin/service/${id}`,config);
    return data;
}


