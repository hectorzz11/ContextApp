import { create } from 'zustand';

//estado global para el perfil
export interface ProfileState{
    name: string;
    email: string;
    age: number;

    changeProfile: (name: string, email: string, age: number) => void;

}
export const useProfileStore = create<ProfileState>()( (set, get)=>({
    name: 'Carlos',
    email: 'john@gmail.com',
    age: 30,
    changeProfile: (name: string, email: string, age: number) => {
        console.log('changing profile');
        set({name, email, age});
    },
}));
