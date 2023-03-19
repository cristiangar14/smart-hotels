import hotelListReducer from './loginSlice';

describe('counter reducer', () => {

  it('should handle initial state', () => {
    expect(hotelListReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

 
});
