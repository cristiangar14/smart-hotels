import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getHotelDataAsync,
  selectHotelList,
  statusHotelList,
} from './hotelListSlice';
import styles from './HotelList.module.css';
import { Hotel } from '../../utils/types/hotel.types';

export const HotelListComponent=()=> {
  const hotels: Hotel[] = useAppSelector(selectHotelList);
  const status: string = useAppSelector(statusHotelList);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getHotelDataAsync())
  }, [])
  

  return (
    <div>
      <div className={styles.row}>
        {
          hotels.map((hotel:Hotel) => {
            return <p>{hotel._id}</p>
          })
        }
        
      </div>
    </div>
  );
}
