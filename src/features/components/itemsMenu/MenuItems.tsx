import React from 'react';

// List components 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Material icon components
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HotelIcon from '@mui/icons-material/Hotel';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { useAppSelector } from '../../../app/hooks';
import { authUser } from '../../login/loginSlice';
import { AuthState } from '../../../utils/types/auth.types';
import { Permissions } from '../../../utils/types/auth.types';
export const MenuItems = () => {

    const auth: AuthState = useAppSelector(authUser);
    const {authPermissions} = auth
    return (
        <>
            {
                authPermissions?.includes(Permissions.HOTEL_LIST) &&
                <ListItemButton>
                    <ListItemIcon>
                        <HotelIcon />
                    </ListItemIcon>
                    <ListItemText primary='Hoteles'/>
                </ListItemButton>
            }

            {
                authPermissions?.includes(Permissions.CREATE_HOTEL) &&
                <ListItemButton>
                    <ListItemIcon>
                        <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary='Crear'/>
                </ListItemButton>
            }

            {
                authPermissions?.includes(Permissions.RESERVATION_LIST) &&
                <ListItemButton>
                    <ListItemIcon>
                        <RoomServiceIcon />
                    </ListItemIcon>
                    <ListItemText primary='Reservas'/>
                </ListItemButton>
            }
        </>    
        
    )
}
