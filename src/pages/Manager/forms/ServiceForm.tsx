import React from 'react';
import { useForm } from 'react-hook-form';
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const animalCategories=[
    {label:"kot",value:"kot", icon:FaCat },
    {label:"pies",value:"pies",icon:FaDog},  
]


const servicePricing=[
    {label:"Cena regularna",formValue:"price"},
    {label:"Cena Promocyjna",formValue:"promotionPrice"},
    {label:"Cena z karta stałego klienta",formValue:"discountPrice"},
]

const priceVariant=[
    {label:"Regularna",formValue:"isPromotion",value:false},
    {label:"Promocyjna",formValue:"isPromotion",value:true}
]

const serviceEstimatedTimeOptions=[
    {label:30,formValue:"estimatedTime"},
    {label:45,formValue:"estimatedTime"},
    {label:60,formValue:"estimatedTime"},
    {label:75,formValue:"estimatedTime"},
    {label:90,formValue:"estimatedTime"},
    {label:120,formValue:"estimatedTime"},
]


const ServiceForm:React.FC = ({handleSave}) => {


const {register,handleSubmit,watch,formState:{errors}}=useForm({
    defaultValues:{
        name:"",
        description:"",
        estimatedTime:"",
        animal:"",
        image:"",
        price:"",
        promotionPrice:"",
        isPromotion:"",
        discountPrice:""

    }
})

const onSubmit = handleSubmit((data) => {
    handleSave({ formData: data });
    console.log(data)
  });

const pet = watch("estimatedTime")
console.log(pet)
  return (
    <form 
    onSubmit={onSubmit}
    className='grid-row-5 gap-3 grid-cols-[3fr_2fr] md:gap-3 lg:grid lg:gap-8 '>

<div className='flex flex-col gap-9'>
    <div>
        <span>Rodzaj usługi</span>
<div className='grid-row-5 gap-3 md:grid-cols-2 md:gap-3 lg:grid '>
    {animalCategories.map((category)=>{
        return(
           <label 
           htmlFor={category?.label} 
           className={`${watch("animal") ===category?.label? "bg-indigo-300 font-bold":"bg-slate-200 text-semibold"} text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2`}
          >
            <input type="radio"
                   {...register("animal",{required:"Kategoria usługi jest wymagana"})}
            name="animal"
            id={category?.label}
            value={category?.label}
            className='hidden'
        
            />
            <category.icon    className={`${watch("animal") ===category?.label? "text-slate-700":"text-slate-400"} text-xl`} />
            {category?.label}
           </label>
        )
    })}
</div>
</div>
<div className='flex flex-col'>
                <label htmlFor="">Nazwa usługi</label>
                <input
                   {...register("name",{required:"Plese enter service name"})} 
                type="text" 
                className='border rounded border-gray-300 w-full py-3  lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
            </div>
    
            <div className='flex flex-col'>
                <span >Opis usługi</span>
                <textarea
                       {...register("description",{required:"Plese enter service description"})}  
                rows={6} 
                className='border rounded w-full py-3 border-gray-300   lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
            </div>

            <div className='flex flex-col my-auto'>
                <label className=' font-semibold text-gray-600 text-xl h-[150px] border-2 rounded border-dashed  flex justify-center items-center cursor-pointer ' htmlFor="file">Dodaj zdjęcie</label>
                <input 
                id="file"
                type="file" 
                className='hidden border rounded border-gray-300 w-full py-3  lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
            </div>
</div>

<div className='flex flex-col gap-9 border p-5 rounded-md  border-gray-300'>
<div>
<div className='flex gap-2 items-center mb-4 text-slate-600 font-semibold '>
<FaCoins/>
<span>Cena Usługi</span>
</div>
<div className='grid-row-5 gap-3  md:gap-3 lg:grid'>

{servicePricing.map((pricing)=>{
    return(
       <label 
       htmlFor={pricing?.label} 
       className='flex flex-col-reverse'>
        <input type="text"
        {...register(pricing?.formValue)}
      
        id={pricing?.label}
       placeholder='PLN'
       className='border  rounded w-full py-3  lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100 '
        />
        {pricing?.label}
       </label>
    )
})}
</div>
</div>

<div className='grid-row-5 gap-3 md:grid-cols-2 md:gap-3 lg:grid '>
    {priceVariant.map((priceType)=>{
        return(
           <label 
           htmlFor={priceType?.label} 
           className={`${watch("isPromotion") ===priceType.value.toString()? "bg-indigo-300 font-bold text-white":"font-semibold"} text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2`}>
            <input type="radio"
            {...register(priceType?.formValue)}
            name="isPromotion"
            id={priceType?.label}
            value={priceType?.value}
            className='hidden'
            />
            {priceType?.label}
           </label>
        )
    })}
</div>

<div>
<div className='text-slate-500 font-semibold flex items-center gap-2 mb-4'>
<MdOutlineAccessTimeFilled/>
<span>Czas wykonywania</span>
</div>
<div className='grid-row-5 gap-3 md:grid-cols-2 md:gap-3 lg:grid '>
    {serviceEstimatedTimeOptions.map((option)=>{
        return(
           <label 
           htmlFor={option?.label} 
           className={`${watch("estimatedTime") ===option?.label.toString() ? "bg-indigo-300":""} text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2`}>
            <input type="radio"
            {...register(option?.formValue)}
            name="estimatedTime"
            id={option?.label}
            value={option?.label}
            className='hidden'
            />
            {option?.label} min
           </label>
        )
    })}
</div>
</div>
</div>

             
             

<button 
type='submit'
className='bg-blue-500 text-slate-50 font-semibold text-normal py-2 rounded'>Dodaj Usługę</button>
        </form>
  )
}

export default ServiceForm