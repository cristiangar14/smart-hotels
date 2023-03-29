import { Hotel } from "../../utils/types/hotel.types";

export function fetchHotels() {
  return new Promise<{ data: Hotel[] }>((resolve) =>
    setTimeout(() => resolve({ data: [{_id:'dsf1ad2f1', name: 'Hotel 1', numberRooms: 40}] }), 500)
  );
}
