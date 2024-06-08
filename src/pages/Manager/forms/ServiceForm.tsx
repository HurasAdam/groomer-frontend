import React from 'react';
import { useForm } from 'react-hook-form';

const animalCategories=[
    {label:"kot",value:"kot"},
    {label:"pies",value:"pies"},  
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


const {register,handleSubmit,formState:{errors}}=useForm({
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
           className='text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2'>
            <input type="radio"
                   {...register("animal",{required:"Kategoria usługi jest wymagana"})}
            name="animal"
            id={category?.label}
            value={category?.label}
            />
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
    <span>Cena Usługi</span>
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
           className='text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2'>
            <input type="radio"
            {...register(priceType?.formValue)}
            name="isPromotion"
            id={priceType?.label}
            value={priceType?.value}
            />
            {priceType?.label}
           </label>
        )
    })}
</div>

<div>
    <span>Czas wykonywania</span>
<div className='grid-row-5 gap-3 md:grid-cols-2 md:gap-3 lg:grid '>
    {serviceEstimatedTimeOptions.map((option)=>{
        return(
           <label 
           htmlFor={option?.label} 
           className='text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2'>
            <input type="radio"
            {...register(option?.formValue)}
            name="estimatedTime"
            id={option?.label}
            value={option?.label}
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