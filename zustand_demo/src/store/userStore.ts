import { create } from 'zustand'

interface UserState {
  name: string
  age: number
  setName: (name: string) => void
  setAge: (age: number) => void
}

export const useUserStore = create<UserState>((set) => ({
  name: 'Nguyễn Văn A',
  age: 22,
  setName: (name) => set({ name }),
  setAge: (age) => set({ age }),
}))
