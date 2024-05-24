import React from 'react'

import OptionCard from './OptionCard'
import CONSTANTS from '../Constants'


const ExclusiveCombossContainer:React.FC = () => {
  return (
    <div className='bg-blue-100 py-14'>
    <div className='px-8 max-w-[1400px] mx-auto sm:px-16 md:px-0 flex flex-wrap justify-center gap-8 pt-5 pb-16 '>
    {CONSTANTS.SERVLICESLIST.map(({label,description,features,isNew},index)=>{
        return(
<OptionCard 
key={index}
label={label} 
description={description} 
features={features}
isNew={isNew}
className="md:max-w-[40%] lg:max-w-[32%] xl:max-w-[26%]"/>
        )
    })}
    </div>
    </div>
  )
}

export default ExclusiveCombossContainer