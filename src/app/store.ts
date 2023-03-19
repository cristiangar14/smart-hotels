import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import hotelListReducer from '../features/hotelList/hotelListSlice';
import authReducer from '../features/login/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hotelList: hotelListReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
