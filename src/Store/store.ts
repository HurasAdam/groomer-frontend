import { create } from 'zustand';

type IAccountStore = {
    isLoggedIn: boolean;
    account: IUser | undefined;
    setAccount: (data: IUser) => void;
    setIsLoggedIn: (data: boolean) => void
};

type IUser = {
    login: string;
    id: string;
}

export const useAccountStore = create<IAccountStore>((set) => ({
    isLoggedIn: false,
    account: undefined,
    setAccount: (user): void => set({ account: user }),
    setIsLoggedIn: (bol): void => set({ isLoggedIn: bol }),
}))