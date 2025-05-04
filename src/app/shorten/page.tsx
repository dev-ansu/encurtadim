import { Metadata } from "next";
import { api } from "@/lib/api";
import { FormEncurtar } from "@/app/shorten/components/FormEncurtar";

export const metadata: Metadata = {
    title: "Encurtar URL",
};

export default async function page(){
    // const csrfToken = await api.get("/api/csrf");
    
    return(
        <FormEncurtar  />
    )
}