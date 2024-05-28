import axios from "axios"
import * as types from "../types/index";

export const getMyReservations = async({token})=>{

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const {data}= await axios.get(`http://localhost:3000/api/reservations/myReservations`,config);
    return data;
}

export const createReservation = async({formData,token}:{formData:types.IFormData,token:string | undefined})=>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const {data}= await axios.post('http://localhost:3000/api/reservations/create',formData,config);
    return data;
}


export const cancelReservation = async({id})=>{
    const {data}= await axios.delete(`http://localhost:3000/api/reservations/myReservations/cancel/${id}`);
    return data;
}