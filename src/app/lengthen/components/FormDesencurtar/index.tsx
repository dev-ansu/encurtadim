"use client"
import { api } from "@/lib/api";
import { toast, ToastContainer } from "react-toastify";
import { Link2 } from "lucide-react"
import { useState } from "react";
import { ShortUrl } from "@/components/ShortUrl";
import Form from "@/components/form";
import { InputsFormEncurtar } from "./InputsFormDesencurtar";
import { DesencurtarData, DesencurtarSchema } from "@/validations/desencurtar.validation copy";
import { AxiosError } from "axios";

export const FormDesencurtar = ({csrfToken}:{csrfToken:string})=>{
    const [originalUrl, setOriginalUrl] = useState<string>("");

    const desencurtar = async(data: DesencurtarData)=>{
        try{
            const newData = {...data, csrfToken}
            const res = await api.post("/api/lengthen", newData);
            
            if(res.data.success){
                setOriginalUrl(res.data.originalUrl);
                toast.success("A URL foi desencurtada com sucesso.");
            }else{
                toast.error("A URL não foi deseencurtada.")
            }
            
        }catch(err){
            // Verificar se o erro é um AxiosError
        if (err instanceof AxiosError) {
        if (err.response) {
            // Se a resposta da API está presente
            if (err.response.status === 401) {
                toast.error("Acesso não autorizado.");
            } else {
                toast.error(err.response.data.message || "Erro desconhecido.");
            }
            } else {
            // Se não há resposta, pode ser um erro de rede ou outro tipo de falha
                toast.error("Erro ao se comunicar com o servidor.");
            }
            } else {
                // Caso o erro não seja um AxiosError
                toast.error("Ocorreu um erro inesperado.");
            }
        }
    }
   
    return(
        <div className="border-[1px] mt-16 md:m-auto md:mt-16 min-h-28 p-4 border-white rounded mx-2 md:max-w-2xl md:min-w-2xl">
            <h1 className="text-white text-3xl flex justify-center items-center gap-2 font-bold">
                <Link2 size={32} className="bg-blue-500 rounded" />
                Cole a URL a desencurtar
            </h1>          
            <Form onValidSubmit={desencurtar} resolver={DesencurtarSchema} className="mt-4 flex flex-col w-full justify-center items-center">
                <InputsFormEncurtar shortUrl={!!originalUrl} />
            </Form>
            <div>
                {originalUrl && 
                    <ShortUrl shortUrl={originalUrl} />
                }
                <p className="text-white text-center mt-8">O Encurtadim é uma ferramenta encurtadora de URL</p>
                <p className="text-white text-center">Com o Encurtadim é possível criar um link encurtado fácil de compartilhar.</p>
            </div>
            <ToastContainer autoClose={3000} position="top-right" />
        </div>
    )
}