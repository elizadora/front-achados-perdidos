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
                    <p className="text-black font-medium text-[20px] mb-2">{title}</p>
                    <p className="text-black font-normal text-[18px]">{message}</p>
                    <div className="flex gap-5 mt-7 justify-end items-center w-full">
                        <button
                            onClick={onClose}
                            className=" border-2 border-[#0028DF] hover:border-[#0024C9] hover:text-[#0024C9] w-1/4 text-[#0028DF] font-bold text-[14px] h-[40px] rounded-[4px] cursor-pointer"
                        >
                            Não
                        </button>
                        <button
                            onClick={onConfirm}
                            className="bg-[#0028DF] hover:bg-[#0024C9]  w-1/4 text-white font-bold text-[14px] h-[40px] rounded-[4px] cursor-pointer"
                        >
                            Sim
                        </button>
                    </div>
                </div>
            </Dialog>
    )
}