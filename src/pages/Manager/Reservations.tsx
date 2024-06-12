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
    {label:"Oczekujące",value:"pending"},
    {label:"Zrealizowane",value:"completed"},
    {label:"Anulowane",value:"canceled"},
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
    mutationFn:({id}:{id:string})=>{
        return cancelReservation({id})
    },
    onSuccess:()=>{
        queryClient.invalidateQueries("reservations")
    }
})


const cancelReservationHandler = ({id}:{id:string})=>{
    mutate({id})
}


  return (
    <div className='px-8 py-4'>
<select 
className='mb-5'
onChange={(e)=>setSearchFilter(e.target.value)}>
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