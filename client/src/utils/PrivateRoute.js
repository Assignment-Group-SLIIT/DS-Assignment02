import React from "react";
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { getToken } from "./token";

// handle the private routes
const PrivateRoute = () => {
    const location = useLocation();
    const auth = getToken();
    return auth ? <Outlet /> : location.pathname == "/" ? <Navigate to="/home" /> : <Navigate to="/signin" />;
}

export default PrivateRoute;