import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { cancelReservation, getMyReservations } from '../services/reservationsApi'
import { useAccountStore } from '../Store/store';
import ServiceCard from '../components/ServiceCard';
import ReservationCard from '../components/ReservationCard';

const MyReservations:React.FC = () => {
    const user = useAccountStore((state) => state.account);
const queryClient = useQueryClient();




    const {data:reservations}=useQuery({
        queryFn:()=>{
            return getMyReservations({id:user?._id})
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


const cancelReservationHandler= ({id})=>{
mutate({id})
}


    console.log("RESERVATIONS LIST")
 
  return (
    <div className='max-w-[1300px] mx-auto'>
        <div>
            <h2 className='text-3xl text-gray-700 font-semibold'>My Reservations</h2>
            <div>
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