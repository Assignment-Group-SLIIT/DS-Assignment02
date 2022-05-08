import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from "./token";

// handle the private routes
const PrivateRoute = () => {
    const auth = getToken();
    return auth ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;