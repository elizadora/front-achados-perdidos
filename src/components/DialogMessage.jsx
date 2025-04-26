import { Dialog } from "@mui/material";

export default function DialogMessage({ title, message, open, onClose, onConfirm }) {
    return(
        <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="flex items-center justify-center"
            >
                <div className="flex flex-col items-start justify-center p-5">
                    <p className="text-black font-medium text-base mb-2">{title}</p>
                    <p className="text-gray-700 font-normal text-sm lg:text-base">{message}</p>
                    <div className="flex gap-5 mt-7 justify-end items-center w-full">
                        <button
                            onClick={onClose}
                            className="!text-sm md:text-base border-[#8A8A8A] text-[#8A8A8A] border-3 w-1/4 h-[40px] rounded-[4px] cursor-pointer"
                        >
                            Não
                        </button>
                        <button
                            onClick={onConfirm}
                            className="!text-sm md:text-base bg-[#0028DF] hover:bg-[#0024C9]  w-1/4 text-white h-[40px] rounded-[4px] cursor-pointer"
                        >
                            Sim
                        </button>
                    </div>
                </div>
            </Dialog>
    )
}