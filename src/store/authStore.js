import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    user: null,
    role: null,
    branchId: null,
    shopId: null,
    setUser: (user) => set(user),
    clearUser: () => set({ user: null, role: null, branchId: null, shopId: null }),
}))
