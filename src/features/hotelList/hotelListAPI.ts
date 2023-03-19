import { Hotel } from "../../utils/types/hotel.types";

// A mock function to mimic making an async request for data
export function fetchHotels() {
  return new Promise<{ data: Hotel[] }>((resolve) =>
    setTimeout(() => resolve({ data: [{_id:'dsf1ad2f1', name: 'Hotel 1', numberRooms: 40}] }), 500)
  );
}
