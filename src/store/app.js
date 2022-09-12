import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create((set, get) => ({
  profiles: [],
  setProfiles: (profiles) => set(() => ({ profiles })),
  userSigNonce: 0,
  setUserSigNonce: (userSigNonce) => set(() => ({ userSigNonce }))
}))

export const useAppPersistStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (isAuthenticated) => set(() => ({ isAuthenticated })),
      currentUser: null,
      setCurrentUser: (currentUser) => set(() => ({ currentUser })),
      staffMode: false,
      setStaffMode: (staffMode) => set(() => ({ staffMode }))
    }),
    { name: 'narativedex.store' }
  )
)
