import React from 'react';
import CONSTANTS from '../Constants';

const Introduction: React.FC = () => {

  return (
   <div className='bg-orange-50 '>
    <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row px-5 pt-20 sm:pt-24 md:mt-24 lg:py-20 md:px-10 gap-0 md:gap-10 lg:gap-10" >
      <div className='flex-1 flex items-center gap-4 py-24 w-full md:justify-normal justify-center px-1  '>
        {CONSTANTS.IMAGES.IntroductionImages.map((image , index: number) => {
          return (
            <div key={index} className={`flex-1 ${index === 1 ? "mt-[-120px]" : ""} bg-orange-300  rounded-xl`}>
              <img
                src={image}
                className="w-auto h-[350px]  rounded-xl object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-5 flex-1 px-0 lg:px-20 ">
				<span className=" text-center mt-5 sm:text-left font-bold xl:text-6xl text-5xl max-w-[700px] leading-[70px] md:leading-[58px] xl:leading-[68px] ">
                Witamy w Groomer
				</span>
				<p className="leading-7 text-gray-600 lg:my-20  ">
                W Groomer zapewniamy profesjonalną pielęgnację dla psów, kotów i królików. Nasz doświadczony zespół oferuje kompleksowe usługi groomerskie, 
                takie jak strzyżenie, kąpiele i stylizacje. Dbamy o komfort i zadowolenie każdego zwierzaka, tworząc przyjazne i bezstresowe środowisko. 
                Powierz nam swojego pupila, a zadbamy o jego zdrowie i wygląd.
				</p>
				<a
					href="#"
					className="text-blue-400 font-semibold hover:text-blue-500 transition-all"
				>
					Poznaj Naszą Historię
				</a>
			</div>
    </div>
    </div>
  );
}

export default Introduction;