import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Paper } from "@mui/material";
import { useState } from "react";
import {createUser} from "../services/userService";
import { Link, useNavigate } from "react-router-dom";


export default function RegisterUser() {
    // object to store user data
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    // state to store error messages
    const [errorPassword, setErrorPassword] = useState("");

    const navigate = useNavigate();


    // function to handle form submission
    const submitForm = async (e) => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            setErrorPassword("As senhas não coincidem");
            return;
        }

        try{
            const data  = {
                nome: user.name,
                email: user.email,
                telefone: user.phone,
                senha: user.password
            }
            
            const result =  await createUser(data);
            
            alert(result.message);
            
            // send user to login page
            navigate("/login");

            // clean form
            setUser({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            });
            setErrorPassword("");
        
        }catch(error){
            console.log("Erro ao salvar usuário");
        }

    }



    return (
        <div className="flex justify-center items-center bg-[#f3f3f3] min-h-screen">
            <Paper elevation={2} className="flex md:w-1/2 md:h-[90vh] h-[90%] w-[80%] bg-[#FFF7F7] md:flex-row flex-col">
                <div className="background-user-forms flex-1/6 flex flex-col items-center text-white justify-center">
                    <MagnifyingGlassIcon className="md:w-1/2 w-1/4 p-3 md:p-0" />
                </div>
                <div className="flex-1/4 flex flex-col items-center">
                    <div className="w-[80%] mt-10">
                        <h3 className="font-bold text-4xl md:text-left text-center">Cadastro</h3>
                        <p className="text-[#8A8A8A] mt-1 text-[14px] md:text-left text-center">Seja bem-vindo! Por favor, crie sua conta.</p>

                        <form onSubmit={submitForm} className="flex flex-col gap-2 mt-8">
                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Nome</label>

                                <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    type="text" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" required />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Email</label>

                                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    type="email" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" required />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Telefone</label>

                                <input value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                    type="text" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" required />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Senha</label>

                                <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    type="password" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" required />

                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Confirmar Senha</label>

                                <input value={user.confirmPassword} onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }); setErrorPassword("") }}
                                    type="password" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" required />
                                {errorPassword && (
                                    <span className="text-red-500 text-sm">{errorPassword}</span>
                                )}
                            </div>


                            <button type="submit" className="bg-[#0028DF] hover:bg-[#0024C9] text-white font-bold text-[14px] h-[40px] rounded-[4px] mt-5 cursor-pointer">Cadastre-se</button>
                            <p className="text-[#8A8A8A] mt-1 text-[14px] md:mb-3 mb-9 md:text-left text-center">Já tem uma conta? <Link to="/login" className="text-[#0028DF] font-bold">Faça login</Link></p>

                        </form>
                    </div>
                </div>
            </Paper>

        </div>
    );
}