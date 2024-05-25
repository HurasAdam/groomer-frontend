const convertMinutesToHours = (minutes:number):string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    if (hours > 0) {
      return `${hours}godz ${remainingMinutes}min.`;
    } else {
      return `${remainingMinutes}min.`;
    }
  };



  export const utils= {
    convertMinutesToHours
  }