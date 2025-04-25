import {Route} from "react-router-dom";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";


const userRoutes = () => {
    return (
        <>
            <Route path="/login" element={<LoginUser />} />
            <Route path="/cadastro-usuario" element={<RegisterUser />} />
        </>
    )
}

export default userRoutes;