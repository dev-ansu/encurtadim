import { Metadata } from "next";
import { api } from "@/lib/api";
import { FormDesencurtar } from "@/components/FormDesencurtar";

export const metadata: Metadata = {
    title: "Desencurtar URL",
};

// Função para pegar o CSRF Token no servidor

export default async function page(){
    // const csrfToken = await api.get("/api/csrf")

    return(
        <FormDesencurtar />
    )
}