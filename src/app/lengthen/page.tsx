import { Metadata } from "next";
import { FormDesencurtar } from "./components/FormDesencurtar";
import { api } from "@/lib/api";

export const metadata: Metadata = {
    title: "Desencurtar URL",
};

// Função para pegar o CSRF Token no servidor

export default async function page(){
    const csrfToken = await api.get("/api/csrf")

    return(
        <FormDesencurtar csrfToken={csrfToken.data.csrfToken ?? ""} />
    )
}