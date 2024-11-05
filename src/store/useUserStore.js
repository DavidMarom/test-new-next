import { create } from 'zustand';

const useUserStore = create(
    (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
    }));

export default useUserStore;