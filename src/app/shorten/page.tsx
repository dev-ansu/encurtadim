import { Metadata } from "next";
import { api } from "@/lib/api";
import { FormEncurtar } from "@/components/FormEncurtar";

export const metadata: Metadata = {
    title: "Encurtar URL",
};

export default async function page(){
    const csrfToken = await api.get("/api/csrf");
    
    return(
        <FormEncurtar csrfToken={csrfToken.data.csrfToken ?? "1"} />
    )
}