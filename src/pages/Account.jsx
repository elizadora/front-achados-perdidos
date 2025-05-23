import Header from "../components/Header";
import Footer from "../components/Footer";
import DialogMessage from "../components/DialogMessage";

import { UserCircleIcon } from "@heroicons/react/20/solid";

import { Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import { getUserById, updateUser, deleteUser } from "../services/userService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Account() {
    // object to store user data
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })

    // object to store dialog data
    const [dialogConfig, setDialogConfig] = useState({
        title: "",
        message: "",
        open: false,
        onConfirm: () => { },
    });

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // function to get user data by id
    const getUserDetails = async () => {
        try {
            const userId = localStorage.getItem("id");

            const res = await getUserById(userId);

            setUser({
                name: res.data.nome,
                email: res.data.email,
                phone: res.data.telefone,
                password: "********",
            });
        } catch (error) {
            console.log("Erro ao buscar usuário", error);

        }
    }


    // function to call the dialog to edit the user
    const handleEdit = async (e) => {
        e.preventDefault();

        setDialogConfig({
            title: "Atenção",
            message: "Você tem certeza que deseja atualizar os dados?",
            open: true,
            onConfirm: handleSaveEdit,
        });

    }

    // function confirm the edit of the user
    const handleSaveEdit = async () => {
        setDialogConfig({ ...dialogConfig, open: false });

        try {
            const data = {
                nome: user.name,
                email: user.email,
                telefone: user.phone,
                senha: user.password === "********" ? "" : user.password,
            }

            await updateUser(data);

            alert("Usuário atualizado com sucesso");
        } catch (error) {
            console.log("Erro ao atualizar usuário", error);
        }
    }

    // function to call the dialog to delete the user
    const handleDelete = async (e) => {
        e.preventDefault();
        setDialogConfig({
            title: "Atenção",
            message: "Você tem certeza que deseja excluir sua conta? Todos os seus itens serão excluídos também.",
            open: true,
            onConfirm: handleDeleteAccount,
        });
    }

    // function confirm the delete of the user
    const handleDeleteAccount = async () => {
        setDialogConfig({ ...dialogConfig, open: false });

        try {
            await deleteUser();

            alert("Usuário excluído com sucesso");
            logout();
            navigate("/");
            
        } catch (error) {
            console.log("Erro ao excluir usuário", error);
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
                                    className="w-full h-[30px] border border-[#979595] rounded-[4px] px-2 mt-1"
                                    required
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    value={user.name}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-black font-medium text-[18px] flex items-center">Email<p className="text-[10px] text-[#8A8A8A]">(definitivo)</p></label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="gmail"
                                    className="w-full h-[30px] border border-[#979595] rounded-[4px] px-2 mt-1 bg-[#E5E5E5]"
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
                                    className="w-full h-[30px] border border-[#979595] rounded-[4px] px-2 mt-1"
                                    required
                                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                    value={user.phone}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-black font-medium text-[18px]">Senha:</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="password"
                                    className="w-full h-[30px] border border-[#979595] rounded-[4px] px-2 mt-1"
                                    required
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    value={user.password}
                                />
                            </div>
                        </div>
                        <button type="submit" className="bg-[#0028DF] hover:bg-[#0024C9] text-white font-bold text-[14px] h-[40px] rounded-[4px] mt-5 cursor-pointer">Salvar</button>
                        <button onClick={handleDelete} type="button" className="bg-[#FF0000] hover:bg-[#C90000] text-white font-bold text-[14px] h-[40px] rounded-[4px] cursor-pointer">Apagar conta</button>
                    </form>
                </Paper>
            </div>
            <Footer />
            <DialogMessage
                title={dialogConfig.title}
                message={dialogConfig.message}
                open={dialogConfig.open}
                onClose={() => setDialogConfig({ ...dialogConfig, open: false })}
                onConfirm={dialogConfig.onConfirm}
            />
        </main>
    );
}