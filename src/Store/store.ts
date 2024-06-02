import { create } from 'zustand';
import { UserRole } from '../Constants/enums';

type IAccountStore = {
    isLoggedIn: boolean;
    account: IUser | undefined;
    setAccount: (data: IUser) => void;
    setIsLoggedIn: (data: boolean) => void
};



type IUser = {
    email: string;
    _id: string;
    token:string;
    username:string;
    role:UserRole;
}

const checkUserPersist = localStorage.getItem("user")

export const useAccountStore = create<IAccountStore>((set) => ({

  
    isLoggedIn: checkUserPersist?true: false,
    account: checkUserPersist?JSON.parse(checkUserPersist): undefined,
    setAccount: (user): void => set({ account: user }),
    setIsLoggedIn: (bol): void => set({ isLoggedIn: bol }),
}))