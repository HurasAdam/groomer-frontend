import React from 'react'
import { useAccountStore } from '../../Store/store';
import { cancelReservation, getReservations } from '../../services/reservationsApi';
import { useMutation, useQuery, useQueryClient } from 'react-query'
import ReservationCard from '../../components/ReservationCard';


const Reservations:React.FC = () => {
const queryClient = useQueryClient();
    const user = useAccountStore((state) => state.account);

const {data:reservations}=useQuery({
    queryFn:()=>{
        return getReservations({token:user?.token});
    },
    queryKey:["reservations"]
})

const {mutate}=useMutation({
    mutationFn:({id})=>{
        return cancelReservation({id})
    },
    onSuccess:()=>{
        queryClient.invalidateQueries("reservations")
    }
})


const cancelReservationHandler = ({id})=>{
    mutate({id})
}


  return (
    <div className='p-8'>

{reservations?.map((reservation)=>{
    return(
        <ReservationCard manage={true} reservation={reservation} cancelReservationHandler={cancelReservationHandler}/>
    )
})}

    </div>
  )
}

export default Reservations