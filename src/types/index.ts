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