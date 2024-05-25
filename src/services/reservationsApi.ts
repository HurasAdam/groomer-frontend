import axios from "axios"

export const getMyReservations = async({id})=>{

    const {data}= await axios.get(`http://localhost:3000/api/reservations/myReservations/${id}`);
    return data;
}


export const cancelReservation = async({id})=>{
    const {data}= await axios.delete(`http://localhost:3000/api/reservations/myReservations/cancel/${id}`);
    return data;
}