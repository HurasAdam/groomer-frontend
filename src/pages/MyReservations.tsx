import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { cancelReservation, getMyReservations } from '../services/reservationsApi'
import { useAccountStore } from '../Store/store';
import ReservationCard from '../components/ReservationCard';
import * as types from "../types/index";
import { FaCalendarCheck } from "react-icons/fa";

const MyReservations:React.FC = () => {
    const user = useAccountStore((state) => state.account);
const queryClient = useQueryClient();




    const {data:reservations}=useQuery<types.IReservation[]>({
        queryFn:()=>{
            return getMyReservations({token:user?.token})
        },
        queryKey:["myReservations"]
    })

const {mutate}=useMutation({
    mutationFn:({id})=>{
        return cancelReservation({id})
    },
    onSuccess:()=>{
        queryClient.invalidateQueries("myReservations")
    }
})


const cancelReservationHandler= ({id}:{id:string})=>{
mutate({id})
}



 
  return (
    <div className='max-w-[1300px] mx-auto py-10 '>
        <div>
            <h2 className='flex gap-2 items-center text-3xl text-gray-700 font-semibold mb-10'><FaCalendarCheck/>Moje rezerwacje</h2>
            <div className='flex flex-col gap-7'>
                {reservations?.map((reservation)=>{
                    return(
                        <ReservationCard 
                        reservation={reservation}
                        cancelReservationHandler={cancelReservationHandler}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default MyReservations