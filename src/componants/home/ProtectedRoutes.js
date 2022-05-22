import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

    let isLoggedIn = false; //place holder for the log in check
    if (isLoggedIn) {

        return <Outlet/>
    }
    else return <Navigate to="/" />

};

export default ProtectedRoutes;