import React from 'react'
import { useForm } from 'react-hook-form'

const OnboardingForm:React.FC = ({onSave}) => {

const {register,formState:{errors, isValid},handleSubmit,watch}=useForm({
    defaultValues:{
        password:"",
        newPassword:"",
        confirmNewPassword:""
    },
    mode: "onChange",
})

const validatePassword = (val:string):boolean=>{
    if(val.length <8)return false;

    const hasDigit = /\d/.test(val);
    const hasLowerCase = /[a-z]/.test(val);
    const hasUpperCase = /[A-Z]/.test(val);
    const hasLetter = /[a-zA-Z]/.test(val);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(val);

    return hasDigit && hasLowerCase && hasUpperCase && hasLetter && hasSpecialChar;
}

const onSubmit = handleSubmit((data) => {


onSave({formData:data})
})
  return (
    
    <form 
    onSubmit={onSubmit}
    className=' px-2  py-10 flex flex-col gap-9'>
    <div className='flex flex-col gap-10 mt-2 mb-10'>
    <h2 className='text-3xl font-semibold text-blue-800'>Zmień swoje hasło</h2>
        <p className='text-normal text-slate-600'>Aby zabezpieczyć swoje konto, musisz zmienić hasło. Proszę podać obecne hasło oraz wybrać nowe hasło zgodnie z poniższymi wymaganiami.</p>
        <ul className='text-sm text-slate-500'>
          <li>Twoje nowe hasło powinno:</li>
          <li>Mieć co najmniej 8 znaków</li>
          <li>Zawierać co najmniej jedną cyfrę</li>
          <li>Zawierać co najmniej jedną wielką literę</li>
          <li>Zawierać co najmniej jeden znak specjalny (@, #, $, itp.)</li>
        </ul>
    </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Wprowadź obecne hasło</label>
                    <input 
 {...register("password",{required:"Obecne hasło jest wymagane"})}
                    className='bg-slate-200 py-2 rounded '
                    type="password" />
                           {errors.password && (<span className='text-rose-600 text-xs'>{errors.password.message}</span>)}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Wprowadź nowe hasło</label>
                    <input 
                    {...register('newPassword', {
                        validate: (val) =>
                          validatePassword(val) ||
                          'Nowe hasło powinno zawierać co najmniej 8 znaków, w tym co najmniej 1 cyfrę, 1 literę, 1 wielką literę, 1 małą literę oraz 1 znak specjalny.',
                      })}
                    className='bg-slate-200 py-2 rounded '
                    type="password" />
                       {errors.newPassword && (<span className='text-rose-600 text-xs'>{errors.newPassword.message}</span>)}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Potwierdź nowe hasło</label>
                    <input 
           {...register("confirmNewPassword",{
            validate:(value)=>{
                const newPassword = watch("newPassword")
                if(value !== newPassword){
                    return "Hasła nie sa takie same"
                }
                return true
            }
         })}
                    className='bg-slate-200 py-2 rounded '
                    type="password" />
                         {errors.confirmNewPassword && (<span className='text-rose-600 text-xs'>{errors.confirmNewPassword.message}</span>)}
                </div>
                <button className='bg-blue-500 text-slate-100 mt-8 font-semibold pt-3 rounded py-1.5'>Potwierdź</button>
            </form>
  )
}

export default OnboardingForm