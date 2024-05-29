export interface IFormData{
    serviceId:string;
    employee:string;
    petName:string;
    petRace:string;
    reservationDate:string;
    extraInfo?:string | undefined;
  }

  export interface IEmployee{
    _id:string;
    email:string;
    username:string;
    avatar?:string;
    role:string;
  }

  export interface IService{
    _id:string;
    name:string;
    price:number;
    description:string;
    estimatedTime:number;
    image:string;
}

export interface IAsignedEmployee{
    _id:string;
    username:string;
    avatar?:string
}
export interface IReservation{
_id:string;
service:IService;
reservationDate:string;
petName:string;
petRace:string;
assignedEmployee:IAsignedEmployee
}