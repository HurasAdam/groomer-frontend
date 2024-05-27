import React from 'react'
import { useForm } from 'react-hook-form';
import { IoIosCheckmarkCircle } from "react-icons/io";
import * as types from "../types/index";


const racesList = [
    { label: "Beagle", value: "beagle" },
    { label: "Bokser", value: "bokser" },
    { label: "Bulldog", value: "bulldog" },
    { label: "Chihuahua", value: "chihuahua" },
    { label: "Cocker Spaniel", value: "cocker-spaniel" },
    { label: "Dalmatyńczyk", value: "dalmatynczyk" },
    { label: "Doberman", value: "doberman" },
    { label: "Golden Retriever", value: "golden-retriever" },
    { label: "Jamnik", value: "jamnik" },
    { label: "Labrador Retriever", value: "labrador-retriever" },
    { label: "Maltańczyk", value: "maltanczyk" },
    { label: "Mops", value: "mops" },
    { label: "Owczarek niemiecki", value: "owczarek-niemiecki" },
    { label: "Pudel", value: "pudel" },
    { label: "Rottweiler", value: "rottweiler" },
    { label: "Shih Tzu", value: "shih-tzu" },
    { label: "Siberian Husky", value: "siberian-husky" },
    { label: "West Highland White Terrier", value: "west-highland-white-terrier" },
    { label: "Yorkshire Terrier", value: "yorkshire-terrier" }
  ];
  
interface IProps{
  employees:types.IEmployee[];
  serviceId:string;
  onSave:({formData}:{formData:types.IFormData})=>void;
}


const ReservationForm:React.FC<IProps> = ({employees,serviceId,onSave}) => {



const {register,handleSubmit,formState:{errors,isValid,dirtyFields,touchedFields},getFieldState }=useForm({
    defaultValues:{
        serviceId:serviceId? serviceId: "",
        petName:"",
        petRace:"",
        employee:"",
        reservationDate:"",
        extraInfo:""
    },
    mode: "onChange",
})

const renderCheckmark = (field: string) => {
    const { isTouched, isDirty, invalid } = getFieldState(field);
    return isTouched && isDirty && !invalid && (
      <IoIosCheckmarkCircle className="text-green-500 w-5 h-auto absolute right-5 top-9" />
    );
  };


  const onSubmit = handleSubmit((data:types.IFormData) => {
    const { serviceId, petName, petRace, employee, reservationDate, extraInfo } = data;
    const formData= { serviceId, petName, petRace, employee, reservationDate };

    if (extraInfo && extraInfo !== "") {
        formData.extraInfo = extraInfo;
    }

    onSave({ formData });
});

  return (
<div className='flex flex-col gap-10'>
    <h2>Umów wizyte</h2>
    <form 
    onSubmit={onSubmit}
    className='flex flex-col gap-4'>
        <div className='flex flex-col relative'>
            <label htmlFor="petName">Imię zwierzaka</label>
            <input 
            {...register("petName",{required:"imię zwierzaka jest wymagane"})}
            className='border rounded border-gray-300 py-2' 
            id="petName"
            type="text" />
                    {errors.petName && (
          <span className="text-rose-500 text-sm">{errors.petName.message}</span>
        )}
         {renderCheckmark("name")}
        </div>
        <div className='flex flex-col relative'>
            <span>Wybierz Rase</span>
          <select 
          {...register("petRace",{required:"Rasa jest wymaana"})}
          name="petRace" 
          id="petRace" 
          className='border rounded py-2 border-gray-300'>
            {racesList.map((race)=>{
                return(
                    <option>
                        {race.label}
                    </option>
                )
            })}
          </select>
          {errors.petRace && (
          <span className="text-rose-500 text-sm">{errors.petRace.message}</span>
          
        )}
   {renderCheckmark("race")}
        </div>
        <div className='flex flex-col relative'>
            <span>Wybierz Pracownika</span>
          <select 
        {...register("employee",{required:"Proszę wybrać pracownika"})}
          name="employee" 
          id="employee" 
          className='border rounded py-2 border-gray-300'>
            <option defaultChecked value="">Wybierz Pracownika</option>
            {employees?.map(({username,_id})=>{
                return(
                    <option value={_id}>
                        {username}
                    </option>
                )
            })}
          </select>
          {errors.employee && (
          <span className="text-rose-500 text-sm">{errors.employee.message}</span>
        )}
           {renderCheckmark("employee")}
        </div>
        <div className='flex flex-col relative'>
            <label htmlFor="reservationDate">Wybierz datę</label>
            <input 
            {...register("reservationDate",{required:"Proszę wybrać datę rezerwacji"})}
            id="reservationDate"
            className='border rounded border-gray-300 py-2' 
            type="text" />
                      {errors.reservationDate && (
          <span className="text-rose-500 text-sm">{errors.reservationDate.message}</span>
        )}
             {renderCheckmark("reservationDate")}
        </div>
        <div className='flex flex-col'>
            <span>Dodatkowe informacje</span>
           <textarea 
           {...register("extraInfo")}
           name="extraInfo" 
           id="extraInfo" 
           rows={4} 
           className='border rounded border-gray-300 p-1'></textarea>
        </div>
        <button 
    type="submit"
    className='bg-blue-500 py-1.5 text-white font-semibold'>Umów</button>
    </form>

</div>
  )
}

export default ReservationForm