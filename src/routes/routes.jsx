import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import userRoutes from "./userRoutes";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {userRoutes()}
        </Routes>
    )
}

export default AppRoutes;