import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AlertCopyEmail = (email: string) =>
  toast(` Email ${email} copiado`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

export const AlertProjetoDesenvolvimento = () =>
  toast("Projeto em desenvolvimento", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
