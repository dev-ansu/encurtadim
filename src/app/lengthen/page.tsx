import { Metadata } from "next";
import { FormDesencurtar } from "./components/FormDesencurtar";
import { api } from "@/lib/api";

export const metadata: Metadata = {
    title: "Desencurtar URL",
};

// Função para pegar o CSRF Token no servidor
export async function getServerSideProps() {
    const csrfToken = await api.get("/api/csrf");

    return {
        props: {
            csrfToken: csrfToken.data.csrfToken,
        },
    };
}

export default async function page({ csrfToken }: { csrfToken: string }){
    
    return(
        <FormDesencurtar csrfToken={csrfToken} />
    )
}