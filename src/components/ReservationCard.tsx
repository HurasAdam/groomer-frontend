import React from 'react'
import { GoClockFill } from 'react-icons/go'
import { FaCoins } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import images from '../Constants/imaegs'
import { utils } from '../utils';
import * as types from "../types/index";


interface IProps{
    manage?:boolean;
    reservation:types.IReservation;
    className?:string;
    cancelReservationHandler:({id}:{id:string})=>void;
}

const ReservationCard:React.FC<IProps> = ({manage,reservation,cancelReservationHandler,className}) => {

 
    return (
        <div
            className={`rounded-xl overflow-hidden 
        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}
        
        `}>
            
                <img
                    src={images.DogBathImage}
                    alt="title"
                    className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-50' />
          

            <div className='p-5'>
             <div className='border-b py-1.5 border-gray-200 flex justify-between '>
                    <h2
                        className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[24px] flex gap-2'>
                       <div className='flex flex-col '>
               {manage &&       (<><span className='block bg-orange-50 rounded-full mx-auto px-2 text-md font-bold text-orange-300'>A</span>
                        <span className='text-sm'>
                        {reservation?.owner?.username}
                        </span></>)}
                        </div> {reservation?.service?.name}
                    </h2>
               
                  
      
                    <span className='text-gray-600 font-semibold text-normal'>{new Date(reservation.reservationDate).toLocaleDateString()}</span>
                    
                    </div>
                <p className='text-dark-light mt-3 text-sm md:text-lg'>
                    {reservation?.service?.description}
                </p>
              
<div className='flex justify-between'>

<div className='flex flex-col flex-nowrap  mt-6'>

<div className='flex items-center gap-x-2 md:gap-x-2.5'>
<IoPersonCircle className='w-[19px] h-auto text-gray-600'/>
<span className='text-gray-600 font-semibold'>{reservation?.assignedEmployee?.username}</span>
</div>

<div className='flex items-center gap-x-2 md:gap-x-2.5'>
<GoClockFill className='text-gray-600'/>
<span className='font-semibold text-gray-600'>{utils.convertMinutesToHours(reservation?.service?.estimatedTime) }</span>

</div>
<div className='flex items-center gap-x-2 md:gap-x-2.5'>
<FaCoins className='text-gra-600'/>
<span className='text-gray-600 font-semibold'>{reservation?.service?.price} zł</span>
</div>


</div>

{ reservation?.isPending && (<button 
onClick={()=>cancelReservationHandler({id:reservation?._id})}
className='bg-rose-600 h-fit my-auto  px-6 py-2 rounded-md text-white font-semibold hover:bg-rose-500 transition-all'
>
    Odwołaj
    </button>)}
    {reservation?.isCanceled && (
        <span className='bg-rose-900 h-fit my-auto  px-6 py-2 rounded-md text-white font-semibold '>Anulowana</span>
    )}

    {reservation?.isCompleted && (
    <span className='bg-green-600 h-fit my-auto  px-6 py-2 rounded-md text-white font-semibold'>Zrealizowana</span>
    )}
</div>
            </div>
        </div>
    )
}

export default ReservationCard