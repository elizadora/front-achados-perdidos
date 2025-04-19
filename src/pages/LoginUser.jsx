import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Paper } from "@mui/material";


export default function LoginForm() {
    return (
        <div className="flex justify-center items-center bg-[#f3f3f3] min-h-screen">
            <Paper elevation={2} className="flex md:w-[50%] md:h-[90vh] h-[90%] w-[80%] bg-[#FFF7F7] md:flex-row flex-col">
                <div className="background-user-forms flex-1/6 flex flex-col items-center text-white justify-center">
                    <MagnifyingGlassIcon className="md:w-1/2 w-1/4 p-3 md:p-0" />
                </div>
                <div className="flex-1/4 flex flex-col items-center">
                    <div className="w-[80%] md:mt-20 mt-10">
                        <h3 className="font-bold text-4xl md:text-left text-center">Login</h3>
                        <p className="text-[#8A8A8A] mt-1 text-[14px] md:text-left text-center">Bem-vindo de volta! Por favor, faça login na sua conta.</p>

                        <div className="flex flex-col gap-2 mt-8">
                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Email</label>
                                <input type="email" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[#8A8A8A] font-medium text-[14px]">Senha</label>
                                <input type="password" className="w-full h-[30px] border border-[#D9D9D9] rounded-[4px] px-2" />

                            </div>
                            <button className="bg-[#0028DF] hover:bg-[#0024C9] text-white font-bold text-[14px] h-[40px] rounded-[4px] mt-5 cursor-pointer">Login</button>
                            <p className="text-[#8A8A8A] mt-1 text-[14px] md:mb-3 mb-9 md:text-left text-center">Usuário novo? <a href="/login" className="text-[#0028DF] font-bold">Cadastre-se</a></p>

                        </div>
                    </div>
                </div>
            </Paper>

        </div>
    );
}