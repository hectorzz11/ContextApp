import { create } from 'zustand';

export interface CounterState{
    count: number;
    incrementBy: (value: number) => void;
}

//userCounterStore
export const useCounterStore = create<CounterState>()((set, get)=>({
    count: 0,
    incrementBy: (value: number) => {
        //set(state=>({count: state.count + value}));
        set({count:get().count + value});
        //set((state: { count: number; }) => ({count: state.count + value}));
    },
}));

