import React from 'react'

const OnboardingPage:React.FC = () => {
  return (
    <div className='flex-1 '>

        <form action="" className='p-10 flex flex-col gap-6'>
            <div className='flex flex-col'>
                <label htmlFor="">Wprowadź obecne hasło</label>
                <input 
                className='bg-slate-200 py-2 rounded '
                type="password" />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Wprowadź nowe hasło</label>
                <input 
                className='bg-slate-200 py-2 rounded '
                type="password" />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Potwierdź nowe hasło</label>
                <input 
                className='bg-slate-200 py-2 rounded '
                type="password" />
            </div>
        </form>
    </div>
  )
}

export default OnboardingPage