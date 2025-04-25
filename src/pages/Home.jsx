import { Paper } from "@mui/material";
import logoHome from "../assets/images/home-logo.png";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center bg-[#f3f3f3] min-h-screen">
            <Paper elevation={2} className="flex md:w-[60%] md:h-[90vh] h-[90%] w-[80%] bg-[#FFF7F7] md:flex-row flex-col md:p-0 p-5">
                <div className="flex-1/5 flex md:flex-col items-center text-white justify-center p-10">
                    <img src={logoHome} alt="Logo" className="md:w-[80%] w-[10%]" />
                    <h3 className="text-[#166AED] md:font-extrabold md:text-2xl font-bold" >TRÊS PULINHOS</h3>
                </div>
                <div className="flex-1/5 flex flex-col items-center justify-center">
                    <div className="md:w-[80%] mt-10 w-[100%] flex flex-col md:items-start items-center">
                        <h3 className="font-bold text-4xl md:text-left">Bem-vindo(a)!</h3>
                        <p className="text-[#8A8A8A] mt-1 text-[14px]">Reencontros começam aqui.</p>
                        
                        <div className="flex flex-col gap-5 mt-10 w-[75%]">
                            <button onClick={() => navigate("/login")} className="bg-[#0028DF] hover:bg-[#0024C9] text-white h-[40px] cursor-pointer rounded-[4px] ">Entrar</button>
                            <button onClick={() => navigate("/cadastro-usuario")} className="text-[#8A8A8A] hover:border-[#0024C9] hover:text-[#0024C9] border-2 border-[#8A8A8A] h-[40px] cursor-pointer rounded-[4px] mb-9">Cadastre-se</button>
                        </div>
                       
                    </div>
                </div>
            </Paper>
        </div>
    )
}

