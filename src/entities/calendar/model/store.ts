/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';

interface CalendarStoreState {
  currentDate: Date;
  setCurrentDate: (currentDate: Date) => void;
  startDate?: Date;
  setStartDate: (startDate: Date) => void;
  endDate?: Date;
  setEndDate: (endDate: Date) => void;
  selectedYears: number[];
}

export const useCalendarStore = create<CalendarStoreState>((set) => ({
  currentDate: new Date(),
  setCurrentDate: (currentDate: Date) => set({ currentDate }),
  startDate: undefined,
  setStartDate: (startDate: Date) => set({ startDate }),
  endDate: undefined,
  setEndDate: (endDate: Date) => set({ endDate }),
  selectedYears: [],
}));
