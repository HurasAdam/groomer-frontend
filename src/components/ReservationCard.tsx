import React from 'react'
import { GoClockFill } from 'react-icons/go'
import { FaCoins } from "react-icons/fa";
import images from '../Constants/imaegs'
import { Link } from 'react-router-dom';
import { utils } from '../utils';

interface IService{
    _id:string;
    name:string;
    price:number;
    description:string;
    estimatedTime:number;
    image:string;
}

interface IReservation{
_id:string;
service:IService;
reservationDate:string;
}


interface IProps{
    reservation:IReservation;
    className?:string;
}




const ReservationCard:React.FC<IProps> = ({reservation,className}) => {

 
    return (
        <div
            className={`rounded-xl overflow-hidden 
        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}
        
        `}>
            <Link to="service">
                <img
                    src={images.DogBathImage}
                    alt="title"
                    className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-50' />
            </Link>

            <div className='p-5'>
             <div className='border-b py-1.5 border-gray-200 flex justify-between '>
                    <h2
                        className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[24px] '>
                        {reservation?.service?.name}
                    </h2>
                    <span className='text-gray-600 font-semibold text-normal'>{new Date(reservation.reservationDate).toLocaleDateString()}</span>
                    </div>
                <p className='text-dark-light mt-3 text-sm md:text-lg'>
                    {reservation?.service?.description}
                </p>
              
<div className='flex justify-between'>

<div className='flex flex-col flex-nowrap  mt-6'>

<div className='flex items-center gap-x-2 md:gap-x-2.5'>
<GoClockFill className='text-gray-600'/>
<span className='font-semibold text-gray-600'>{utils.convertMinutesToHours(reservation?.service?.estimatedTime) }</span>

</div>
<div className='flex items-center gap-x-2 md:gap-x-2.5'>
<FaCoins className='text-gra-600'/>
<span className='text-gray-600 font-semibold'>{reservation?.service?.price} zł</span>
</div>



</div>

<button className='bg-rose-600 h-fit my-auto  px-6 py-2 rounded-md text-white font-semibold hover:bg-rose-500 transition-all'>Odwołaj</button>
</div>

                
            </div>


        </div>
    )
}

export default ReservationCard