import { Metadata } from "next";
import { FormEncurtar } from "./components/FormEncurtar";
import { api } from "@/lib/api";

export const metadata: Metadata = {
    title: "Encurtar URL",
};

export default async function page(){
    const csrfToken = await api.get("/api/csrf");
    
    return(
        <FormEncurtar csrfToken={csrfToken.data.csrfToken ?? ""} />
    )
}