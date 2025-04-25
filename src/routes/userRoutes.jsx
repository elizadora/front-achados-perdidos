import {Route} from "react-router-dom";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";
import Main from "../pages/Main";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthRoute = ({component:Component}) =>{
  const {userId} = useContext(AuthContext);
  return userId ? <Component /> : <Navigate to="/" />
}

const userRoutes = () => {
    return (
        <>
            <Route path="/login" element={<LoginUser />} />
            <Route path="/cadastro-usuario" element={<RegisterUser />} />
            <Route path="/principal" element={<AuthRoute component={Main}/>} />
        </>
    )
}

export default userRoutes;