import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContextProvider } from "../AuthProvider/AuthProvider";


const PrivetRouter = ({children}) => {
    const {user,reload} = useContext(AuthContextProvider)
    if (reload) {
        return <div className="w-7xl h-screen flex justify-center mx-auto items-center"><span className="loading loading-spinner loading-lg  "></span></div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivetRouter;