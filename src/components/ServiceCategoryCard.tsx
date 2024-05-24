import React from "react";

interface IServiceCategoryCard {
  className: string;
  service: {
    label: string;
    icon: string;
  };
}

const ServiceCategoryCard: React.FC<IServiceCategoryCard> = ({
  className,
  service,
}) => {
  return (
    <div className={`  rounded-lg   flex flex-col items-center ${className}`}>
      <h3 className="text-2xl font-bold font-heroSectionFont text-slate-600">
        {service.label}
      </h3>
      <img
        src={service.icon}
        className="  object-cover bg-no-repeat text-slate-700"
      />
    </div>
  );
};

export default ServiceCategoryCard;
