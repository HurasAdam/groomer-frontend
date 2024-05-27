import axios from "axios"

export const getMyReservations = async({id})=>{

    const {data}= await axios.get(`http://localhost:3000/api/reservations/myReservations/${id}`);
    return data;
}

export const createReservation = async({formData,token})=>{
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