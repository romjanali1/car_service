import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const location = useLocation()

    if(loding){
        return <progress className="progress w-56"></progress>;
    }

    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;