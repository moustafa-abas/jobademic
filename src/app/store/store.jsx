import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useStore = create(  persist(
    (set) => ({
      userData: [],
      loading:false,
      logined:false,
      flowOpen:false,
      alert:'',
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
   handleOpen : (value) => set((state)=>({flowOpen:true,alert:value})),
   handleClose : () => set((state)=>({flowOpen:false})),
  //  setAlert : (value) => set((state)=>({alert:value})),
    }),
    {
      name: 'user', // اسم المفتاح في localStorage
    }
  ))
