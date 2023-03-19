import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Hotel } from '../../utils/types/hotel.types';
import { fetchHotels } from './hotelListAPI';

export interface HotelListState {
  hotels: Hotel[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: HotelListState = {
  hotels: [],
  status: 'idle',
};
export const getHotelDataAsync = createAsyncThunk(
  'hotels/fetchHotels',
  async () => {
    const response = await fetchHotels();
    return response.data;
  }
);

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotelDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHotelDataAsync.fulfilled, (state, action) => {
        state.hotels = action.payload
        state.status = 'idle';
      })
      .addCase(getHotelDataAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {} = hotelListSlice.actions;

export const selectHotelList = (state: RootState) => state.hotelList.hotels;
export const statusHotelList = (state: RootState) => state.hotelList.status;


export default hotelListSlice.reducer;
