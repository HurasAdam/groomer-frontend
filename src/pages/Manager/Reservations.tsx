import React from 'react'
import { useAccountStore } from '../../Store/store';
import { getReservations } from '../../services/reservationsApi';
import { useQuery } from 'react-query'
import ReservationCard from '../../components/ReservationCard';


const Reservations:React.FC = () => {

    const user = useAccountStore((state) => state.account);

const {data:reservations}=useQuery({
    queryFn:()=>{
        return getReservations({token:user?.token});
    },
    queryKey:["reservations"]
})


console.log(reservations)


  return (
    <div className='p-8'>

{reservations?.map((reservation)=>{
    return(
        <ReservationCard manage={true} reservation={reservation}/>
    )
})}

    </div>
  )
}

export default Reservations