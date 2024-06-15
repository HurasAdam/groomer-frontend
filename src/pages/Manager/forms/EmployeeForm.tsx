import React from 'react';
import { useForm } from 'react-hook-form';
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdWork } from "react-icons/md";
import images from '../../../Constants/imaegs';

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
    {label:"aktywny",formValue:"isPromotion",value:true},
    {label:"nie aktywny",formValue:"isPromotion",value:false}
]

const experienceVariants=[
    {label:"junior groomer",formValue:"experienceLevel"},
    {label:"Groomer",formValue:"experienceLevel"},


]


const EmployeeForm:React.FC = ({handleSave,serviceDetails,isLoading}) => {


const {register,handleSubmit,watch,formState:{errors,isDirty}}=useForm({
    defaultValues:{
        username: "",
        surname:"",
        email:"",
        bio:"",
        avatar:"",
        experienceLevel:""
  
    },
    mode: "onChange",
})


const onSubmit = handleSubmit((data) => {
    handleSave({ formData:data,serviceId:serviceDetails?._id });
  });


  return (
    <form 
    onSubmit={onSubmit}
    className='grid-row-5 gap-3 grid-cols-[3fr_2fr] md:gap-3 lg:grid lg:gap-8 '>

<div className='flex flex-col gap-8'>

<div className='flex flex-col relative gap-1.5'>
                <label 
                className='text-slate-600 font-semibold text-sm'
                htmlFor="">Imię</label>
                <input
                   {...register("username",{required:"imię pracownika jest wymagane"})} 
                type="text" 
                className='border rounded border-gray-300 w-full py-3  lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
                {errors?.username && (<span className='text-xs text-rose-600 absolute bottom-[-20px]'>{errors?.username?.message}</span>)}
            </div>
            <div className='flex flex-col relative gap-1.5'>
                <label 
                className='text-slate-600 font-semibold text-sm'
                htmlFor="">Nazwisko</label>
                <input
                   {...register("surname",{required:"nazwisko pracownika jest wymagane"})} 
                type="text" 
                className='border rounded border-gray-300 w-full py-3  lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
                {errors?.surname && (<span className='text-xs text-rose-600 absolute bottom-[-20px]'>{errors?.surname?.message}</span>)}
            </div>

            <div className='flex flex-col relative gap-1.5'>
                <label 
                className='text-slate-600 font-semibold text-sm'
                htmlFor="">Email</label>
                <input
                   {...register("email",{required:"email jest wymagany"})} 
                type="text" 
                className='border rounded border-gray-300 w-full py-3  lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
                {errors?.email && (<span className='text-xs text-rose-600 absolute bottom-[-20px]'>{errors?.email?.message}</span>)}
            </div>

    
            <div className='flex flex-col relative gap-1.5'>
                <span className='text-slate-600 font-semibold text-sm' >Opis</span>
                <textarea
                       {...register("bio",{required:"Opis pracownika jest wymagany"})}  
                rows={6} 
                className='border rounded w-full py-3 border-gray-300   lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
                    {errors?.bio && (<span className='text-xs text-rose-600 absolute bottom-[-20px]'>{errors?.bio?.message}</span>)}
            </div>

      
            <button 
            disabled={(isLoading && !serviceDetails) || (!isDirty && serviceDetails)}
            type='submit'
            className='bg-blue-500 disabled:opacity-50 text-slate-50 font-semibold text-normal py-2 rounded'>
                    {isLoading ? "Zapisywanie" : (serviceDetails ? "Zapisz zmiany" : "Dodaj Usługę")}
            </button>
</div>

<div className='flex flex-col gap-9 border p-5 rounded-md  border-gray-300 h-fit'>
<div>
<div className='flex gap-2 items-center mb-4 text-slate-600 font-semibold '>
<MdWork/>
<span>Pracownik</span>
</div>
<div className='flex flex-col '>
                <label className=' font-semibold text-gray-600 text-xl h-[150px] border-2 rounded border-dashed  flex justify-center items-center cursor-pointer ' htmlFor="file">Dodaj zdjęcie</label>
                <input 
                id="file"
                type="file" 
                className='hidden border rounded border-gray-300 w-full py-3  lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
            </div>
{/* <div className='grid-row-5 gap-3  md:gap-3 lg:grid'>

<img src={images.DogBathImage} alt="" />
</div> */}
</div>

<div className='grid-row-5 gap-3 md:grid-cols-2 md:gap-3 lg:grid '>
    {priceVariant.map((priceType)=>{
        return(
           <label 
           htmlFor={priceType?.label} 
           className={`${typeof watch("isPromotion") === "boolean"
            ? (watch("isPromotion") === priceType.value ? "bg-indigo-300 font-bold text-white" : "font-semibold")
            : (watch("isPromotion") === priceType.value.toString() ? "bg-indigo-300 font-bold text-white" : "font-semibold")
            } text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2`}>
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
<div className='grid-row-5 gap-3 md:grid-cols-2 md:gap-3 lg:grid-row '>
    {experienceVariants.map((option)=>{
        return(
           <label 
           htmlFor={option?.label} 
           className={`${typeof watch("experienceLevel") === "number"
            ? (watch("estimatedTime") === option.label ? "bg-indigo-300 font-bold text-white" : "font-semibold")
            : (watch("estimatedTime") === option.label.toString() ? "bg-indigo-300 font-bold text-white" : "font-semibold")
            } text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2`}>
            <input type="radio"
            {...register(option?.formValue)}
            name="experienceLevel"
            id={option?.label}
            value={option?.label}
            className='hidden'
            />
            {option?.label}
           </label>
        )
    })}
</div>
</div>
</div>

             
             


        </form>
  )
}

export default EmployeeForm;