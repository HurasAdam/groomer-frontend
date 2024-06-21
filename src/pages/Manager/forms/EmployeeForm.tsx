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
    {label:"Junior",formValue:"experienceLevel"},
    {label:"Regular",formValue:"experienceLevel"},


]


const EmployeeForm:React.FC = ({handleSave,serviceDetails,isLoading}) => {


const {register,handleSubmit,watch,formState:{errors,isDirty},setValue}=useForm({
    defaultValues:{
        username: serviceDetails? serviceDetails?.username :"",
        surname:"",
        email: serviceDetails ? serviceDetails?.email :"",
        bio:"",
        avatar:serviceDetails? serviceDetails?.avatar:"",
        experienceLevel:""
  
    },
    mode: "onChange",
})
const selectedAvatarImage= watch("avatar")[0]

const onSubmit = handleSubmit((data) => {

const formData = new FormData();

const avatar = data.avatar[0]
formData.append("username",data.username);
formData.append("email",data.email);
formData.append("bio",data.bio);
formData.append("experienceLevel",data.experienceLevel);
formData.append("avatar",avatar);
    handleSave({ formData:formData,serviceId:serviceDetails?._id });
  });

console.log("USER TO")
console.log(serviceDetails)
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
                    {isLoading ? "Zapisywanie" : (serviceDetails ? "Zapisz zmiany" : "Utwórz konto")}
            </button>
</div>

<div className='flex flex-col gap-9 border px-5 pt-5 pb-8 rounded-md  border-gray-300 h-fit'>
<div>
<div className='flex gap-2 items-center mb-4 text-slate-600 font-semibold '>
<MdWork/>
<span>Pracownik</span>
</div>
{     watch("avatar").length===0 ? (
    <div className='flex flex-col '>
    <label className=' font-semibold text-gray-600 text-xl h-[150px] border-2 rounded border-dashed  flex justify-center items-center cursor-pointer ' htmlFor="avatar">Dodaj zdjęcie</label>
    <input
    {...register("avatar")} 
    id="avatar"
    type="file" 
    className='hidden border rounded border-gray-300 w-full py-3  lg:py-1.5 px-2 xl:py-1 font-normal bg-slate-100' />
</div>
) :

<div className='grid-row-5 gap-3  md:gap-3 lg:grid '>

{serviceDetails?.avatar ? <img src={watch("avatar")}/> : <img src={selectedAvatarImage&& URL.createObjectURL(selectedAvatarImage)} alt="avatar" className='max-h-[350px] max-w-auto mx-auto' />}
<button 
className='bg-teal-600 text-slate-200 font-semibold rounded w-fit py-0.5 px-28 mx-auto'
onClick={()=>setValue("avatar","")}>Usuń</button>
</div>

}
</div>



<div>
<div className='text-slate-500 font-semibold flex items-center gap-2 mb-4'>
<MdOutlineAccessTimeFilled/>
<span>Poziom doświadczenia</span>
</div>
<div className='grid-row-5 gap-3 md:grid-cols-2 md:gap-3 lg:grid relative '>
    {experienceVariants.map((option)=>{
        return(
           <label 
           htmlFor={option?.label} 
           className={`${typeof watch("experienceLevel") === "number"
            ? (watch("experienceLevel") === option.label ? "bg-indigo-300 font-bold text-white" : "font-semibold")
            : (watch("experienceLevel") === option.label.toString() ? "bg-indigo-300 font-bold text-white" : "font-semibold")
            } text-sm flex gap-1 text-gray-700 cursor-pointer bg-gray-200 rounded p-4 mt-3 truncate md:mt-2`}>
            <input type="radio"
            {...register(option?.formValue,{required:"Określ poziom doświadczenia"})}
            name="experienceLevel"
            id={option?.label}
            value={option?.label}
            className='hidden'
            />
            {option?.label}
           </label>
        )
    })}
       {errors?.experienceLevel && (<span className='text-xs text-rose-600 absolute bottom-[-20px]'>{errors?.experienceLevel?.message}</span>)}
</div>
</div>
</div>

             
             


        </form>
  )
}

export default EmployeeForm;