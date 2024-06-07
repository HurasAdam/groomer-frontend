import React from 'react'
import { GoClockFill } from 'react-icons/go'
import { FaCoins } from "react-icons/fa";
import images from '../Constants/imaegs'
import { Link } from 'react-router-dom';

interface IService{
    _id:string;
name:string;
price:number;
created:string;
estimatedTime:number;
description:string;
animal:string;
image:string;
reservationCount:number;
}

interface IProps{
    manage?:boolean;
    service:IService;
    className?:string;
}

const ServiceCard:React.FC<IProps> = ({manage,service,className}) => {

console.log(service)
    return (
        <div
            className={`rounded-xl overflow-hidden 
        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}
        
        `}>
            <Link to="service">
                <img
                    src={service.image || images.DogBathImage}
                    alt="title"
                    className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-50' />
            </Link>

            <div className='p-5'>
                <Link to="service">
                    <h2
                        className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[24px] text-gray-800 '>
                        {service.name}
                    </h2>
                </Link>
                <p className='text-dark-light mt-3 text-sm md:text-base text-gray-700'>
                    {service.description}
                </p>
<div className='flex justify-between'>

<div className='flex flex-col flex-nowrap  mt-6'>

<div className='flex items-center gap-x-2 md:gap-x-2.5'>
<GoClockFill className='text-gray-600'/>
<span className='font-semibold text-gray-600'>{service.estimatedTime}</span>

</div>
<div className='flex items-center gap-x-2 md:gap-x-2.5'>
<FaCoins className='text-gra-600'/>
<span className='text-gray-600 font-semibold'>{service.price} zł</span>
</div>



</div>
{manage ? <Link><button className='bg-teal-500 h-fit my-auto  px-6 py-2 rounded-md text-white font-semibold hover:bg-teal-400 transition-all'>Edytuj</button></Link>  : <Link to={`services/service/${service?._id}`}>
<button 
className='bg-blue-500 h-fit my-auto  px-6 py-2 rounded-md text-white font-semibold hover:bg-blue-400 transition-all'
>
    Umów
    </button>
    </Link>}
</div>

                
            </div>


        </div>
    )
}

export default ServiceCard