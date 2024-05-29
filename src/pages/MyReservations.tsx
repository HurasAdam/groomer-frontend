import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { cancelReservation, getMyReservations } from '../services/reservationsApi'
import { useAccountStore } from '../Store/store';
import ReservationCard from '../components/ReservationCard';
import * as types from "../types/index";

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


    console.log("RESERVATIONS LIST")
 
  return (
    <div className='max-w-[1300px] mx-auto py-10 '>
        <div>
            <h2 className='text-3xl text-gray-700 font-semibold mb-10'>My Reservations</h2>
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