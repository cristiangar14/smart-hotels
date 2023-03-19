
import { AuthState, Permissions } from "../../utils/types/auth.types";
import { Rol } from "../../utils/types/user.type";

export function auth(email:string, password: string) {
  return new Promise<{ data: AuthState }>((resolve) =>
    setTimeout(() => resolve({ 
      data: {
        token: '121651sd51adsf', 
        dataUser: {
          _id: '121dsf',
          name: 'cristian Garzon',
          rol: Rol.ADMIN,
          active: true
        },
        authPermissions: [Permissions.CREATE_HOTEL, Permissions.EDIT_ROOMS, Permissions.HOTEL_LIST, Permissions.RESERVATION_LIST]
      } 
    }), 500)
  );
}
