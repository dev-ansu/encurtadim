import { Metadata } from "next";
import { FormDesencurtar } from "./components/FormDesencurtar";
import { api } from "@/lib/api";

export const metadata: Metadata = {
    title: "Desencurtar URL",
};

export default async function page(){
    const csrfToken = await api.get("/api/csrf");
    
    return(
        <FormDesencurtar csrfToken={csrfToken.data.csrfToken} />
    )
}