import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // state to store user id and token
    const [userId, setUserId] = useState(localStorage.getItem("id"));
    const [token, setToken] = useState(localStorage.getItem("token"));

    // function to sign in the user
    // and store the user id and token in local storage
    const sign = (data) => {
        setUserId(data.data.id);
        setToken(data.token);

        localStorage.setItem("id", data.id);
        localStorage.setItem("token", data.token);
    }

    // function to log out the user
    // and remove the user id and token from local storage
    const logout = () =>{
        setUserId(null);
        setToken(null);

        localStorage.removeItem("id");
        localStorage.removeItem("token");
    }



    return (
        // provide the user id, token, sign and logout functions to the children components
        // so they can access them
        <AuthContext.Provider value={{userId, token, sign, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;