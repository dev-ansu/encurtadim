import { Metadata } from "next";
import { FormDesencurtar } from "./components/FormDesencurtar";
import { api } from "@/lib/api";

export const metadata: Metadata = {
    title: "Encurtar URL",
};

export default async function Lengthen(){
    const csrfToken = await api.get("/api/csrf");
    
    return(
        <FormDesencurtar csrfToken={csrfToken.data.csrfToken} />
    )
}