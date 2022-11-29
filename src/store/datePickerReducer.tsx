import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface IDatePicker {
  startDate: Date | undefined;
  endDate: Date | undefined;
}

const initialState: IDatePicker = {
  startDate: new Date(),
  endDate: undefined,
};

export const DatePickerSlice = createSlice({
  name: 'Comment',
  initialState,
  reducers: {
    changeDate: (state, action: PayloadAction<IDatePicker>) => {
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    },
  },
});

export const {changeDate} = DatePickerSlice.actions;
export default DatePickerSlice.reducer;
