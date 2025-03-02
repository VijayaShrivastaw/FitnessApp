import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../Redux/CounterSlice';
import multiplerReducer from './MultipleScreen';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    multipler: multiplerReducer,
  },
});

export default store;
