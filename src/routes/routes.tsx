import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "../features/dashboard/Dashboard";
import { Login } from "../features/login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Aqui va el home</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/reservation",
    element: <div>Form for reservation</div>,
  },
  {
    path: "/editRoom",
    element: <div>Form for editing room</div>,
  },
  {
    path: "/bookings",
    element: <div>Form for create bookings</div>,
  },
]);