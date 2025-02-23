import { create } from 'zustand';

//estado global para el perfil
export interface ProfileState{
    name: string;
    email: string;
    age: number;

}
export const useProfileStore = create<ProfileState>()( (set, get)=>({
    name: 'Carlos',
    email: 'john@gmail.com',
    age: 30,
}));
