import {createSlice} from '@reduxjs/toolkit';
import {reset} from './CounterSlice';

const multipleSlice = createSlice({
  name: 'multiper',
  initialState: {factor: 4},
  reducers: {
    multiple: state => {
      state.factor *= 2;
    },
    resett: state => {
      state.factor = 4;
    },
  },
});

export const {multiple, resett} = multipleSlice.actions;

export default multipleSlice.reducer;
