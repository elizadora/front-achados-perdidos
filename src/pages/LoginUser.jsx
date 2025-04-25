import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Paper } from "@mui/material";
import { useContext, useState } from "react";
import { login } from "../services/loginService";
import { AuthContext } from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";


export default function LoginUser() {
    // object to store user data
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // state to store error messages
    const [error, setError] = useState("");

    // const to use the AuthContext 
    const { sign } = useContext(AuthContext);

    // const to navigate to another page
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try{
            const data = {
                email: user.email,
                senha: user.password
            }

            
            const res = await login(data);
            
            // if the login is successful, sign in the user
            // and navigate to the home page
            sign(res);
            navigate("/principal");

            
        }catch(error){
            setError("Credenciais invalidas");
        }


    }

    return (
        <div className="flex justify-center items-center bg-[#f3f3f3] min-h-screen">
            <Paper elevation={2} className="flex md:w-1/2 md:h-[90vh] h-[90%] w-[80%] bg-[#FFF7F7] md:flex-row flex-col">
                <div className="background-user-forms flex-1/6 flex flex-col items-center text-white justify-center">
                    <MagnifyingGlassIcon className="md:w-1/2 w-1/4 p-3 md:p-0" />
                </div>
                <div className="flex-1/4 flex flex-col items-center">
                    <div className="w-[80%] md:mt-20 mt-10">
                        <h3 className="font-bold text-4xl md:text-left text-center">Login</h3>
                        <p className="text-[#8A8A8A] mt-1 text-[14px] md:text-left text-center">Bem-vindo de volta! Por favor, faça login na sua conta.</p>

                        <form onSubmit={handleLogin} className="flex flex-col gap-2 mt-5">
                            {error && (
                                <span className="text-red-500 text-sm">{error}</span>
                            )}

                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Email</label>

                                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    type="email" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Senha</label>

                                <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    type="password" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" />

                            </div>
                            <button type="submit" className="bg-[#0028DF] hover:bg-[#0024C9] text-white font-bold text-[14px] h-[40px] rounded-[4px] mt-5 cursor-pointer">Login</button>
                            <p className="text-[#8A8A8A] mt-1 text-[14px] md:mb-0 mb-9 md:text-left text-center">Usuário novo? <Link to="/cadastro-usuario" className="text-[#0028DF] font-bold">Cadastre-se</Link></p>

                        </form>
                    </div>
                </div>
            </Paper>
        </div>
    );
}