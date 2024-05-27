import axios from "axios"

export const getService = async({id})=>{
    const {data}= await axios.get(`http://localhost:3000/api/services/service/${id}`);
    return data;
}