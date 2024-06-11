import React, { useState } from 'react'
import { useAccountStore } from '../../Store/store';
import { cancelReservation, getReservations } from '../../services/reservationsApi';
import { useMutation, useQuery, useQueryClient } from 'react-query'
import ReservationCard from '../../components/ReservationCard';


interface ReservationTypeOption {
    label: string;
    value: string;
  }

const reservationTypeOptions:ReservationTypeOption[]=[
    {label:"Pending",value:"pending"},
    {label:"Completed",value:"completed"},
    {label:"Canceled",value:"canceled"},
]

const Reservations:React.FC = () => {
const queryClient = useQueryClient();
    const user = useAccountStore((state) => state.account);
    const [searchFilter, setSearchFilter]=useState<string>("pending");



const {data:reservations}=useQuery({
    queryFn:()=>{
        return getReservations({searchFilter:searchFilter});
    },
    queryKey:["reservations",searchFilter]
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
    <div className='px-8 py-4'>
<select name="" id="" onChange={(e)=>setSearchFilter(e.target.value)}>
{reservationTypeOptions.map(({label,value},index)=>{
    return(
        < option key={index} value={value}>{label}</option>
    )
})}
</select>
{reservations?.map((reservation)=>{
    return(
        <ReservationCard manage={true} reservation={reservation} cancelReservationHandler={cancelReservationHandler}/>
    )
})}

    </div>
  )
}

export default Reservations