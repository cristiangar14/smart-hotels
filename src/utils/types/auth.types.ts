import { User } from "./user.type"


export enum Permissions {
    HOTEL_LIST = 'hotelList',
    CREATE_HOTEL= 'createHotel',
    EDIT_ROOMS='editRooms',
    RESERVE='reserve',
    RESERVATION_LIST='reservationList',
}

export interface Credentials {
    email: string,
    password: string
}

export interface AuthState {
    token: string,
    dataUser?: User,
    authPermissions?: Permissions[], 
    status?: string
}

