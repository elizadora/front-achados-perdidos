import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserCircleIcon, PencilSquareIcon } from "@heroicons/react/20/solid";

import { Paper } from "@mui/material";
import { useEffect, useState } from "react";

import { getUserById, updateUser } from "../services/userService";

export default function Account() {
    // object to store user data
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })

    // state to store edit mode
    const [editMode, setEditMode] = useState({
        name: true,
        phone: true,
        password: true,
    });

    // function to get user data by id
    const getUserDetails = async () => {
        try{
            const userId = localStorage.getItem("id");

            const res = await getUserById(userId);

            setUser({
                name: res.data.nome,
                email: res.data.email,
                phone: res.data.telefone,
                password: "********",
            });
        }catch(error){
            console.log("Erro ao buscar usuário", error);

        }
    }


    const handleEdit = async (e) => {
        e.preventDefault();

        // call the updateUser function to update the user data
        // and set the edit mode to false
        try{


            const data = {
                nome: user.name,
                email: user.email,
                telefone: user.phone,
                senha: user.password === "********" ? "" : user.password,
            }

            await updateUser(data);
            setEditMode({
                name: true,
                phone: true,
                password: true,
            });



            alert("Usuário atualizado com sucesso");
        }catch(error){
            console.log("Erro ao atualizar usuário", error);
        }
    }

    // useEffect load when the component is mounted
    // and set the user data to the state
    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <main className="min-h-screen flex flex-col justify-between bg-white">
            <Header />
            <div className="flex flex-col items-center justify-cener">
                <Paper elevation={2} sx={{ backgroundColor: "#F3F3F3" }} className="flex w-full md:max-w-1/3  max-w-[90%] flex-col m-10 p-5">
                    <div className="flex flex-col items-center justify-center   ">
                        <UserCircleIcon className="w-36 h-36 text-[#CCCCCC] mt-5" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-black font-medium text-2xl">Minha Conta</p>
                    </div>
                    <form onSubmit={handleEdit} className="flex flex-col gap-3 mt-8 md:w-[100%] w-full">
                        <div className="flex flex-col">
                            <label className="text-black font-medium text-[18px]">Nome</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="text"
                                    className={`w-full h-[30px] border border-[#979595] rounded-[4px] px-2 mt-1
                                        ${editMode.name ? "bg-[#E5E5E5]" : ""}`
                                    }
                                    required
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    disabled={editMode.name}
                                    value={user.name}
                                    autoFocus={true}
                                />
                                <PencilSquareIcon className="w-[30px] h-[30px] text-[#0028DF] cursor-pointer" onClick={() => setEditMode({...editMode, name: !editMode.name})}/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-black font-medium text-[18px] flex items-center">Email<p className="text-[10px] text-[#8A8A8A]">(definitivo)</p></label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="gmail"
                                    className="w-[90%] h-[30px] border border-[#979595] rounded-[4px] px-2 mt-1 bg-[#E5E5E5]"
                                    required
                                    disabled
                                    value={user.email}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-black font-medium text-[18px]">Telefone:</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="text"
                                    className={`w-full h-[30px] border border-[#979595] rounded-[4px] px-2 mt-1
                                        ${editMode.phone ? "bg-[#E5E5E5]" : ""}`
                                    }
                                    required
                                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                    disabled={editMode.phone}
                                    value={user.phone}
                                    autoFocus={editMode.phone}
                                />
                                <PencilSquareIcon className="w-[30px] h-[30px] text-[#0028DF] cursor-pointer" onClick={() => setEditMode({...editMode, phone: !editMode.phone})}  />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-black font-medium text-[18px]">Senha:</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="password"
                                    className={`w-full h-[30px] border border-[#979595] rounded-[4px] px-2 mt-1
                                        ${editMode.password ? "bg-[#E5E5E5]" : ""}`
                                    }
                                    required
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    disabled={editMode.password}
                                    value={user.password}
                                />
                                <PencilSquareIcon className="w-[30px] h-[30px] text-[#0028DF] cursor-pointer"  onClick={() => setEditMode({...editMode, password: !editMode.password})}/>
                            </div>
                        </div>
                        <button type="submit" className="bg-[#0028DF] hover:bg-[#0024C9] text-white font-bold text-[14px] h-[40px] rounded-[4px] mt-5 cursor-pointer">Salvar</button>
                    </form>
                </Paper>
            </div>
            <Footer />
        </main>
    );
}