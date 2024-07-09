/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';

import { HolidayInterface } from '@entities/holiday/interface';

interface HolidayStoreState {
  holidays: Record<number, HolidayInterface[]>;
  setHolidays: (holidays: Record<number, HolidayInterface[]>) => void;
}

export const useHolidayStore = create<HolidayStoreState>((set) => ({
  holidays: {},
  setHolidays: (holidays) => set({ holidays }),
}));
