import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/contexts";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

PrivateRoute.propTypes={
    children: PropTypes.object.isRequired
}

export default PrivateRoute;

