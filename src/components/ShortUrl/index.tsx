"use client"
import { Check, Copy } from "lucide-react"
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export const ShortUrl = ({ shortUrl }: {shortUrl: string})=>{
    const [copied, setCopied] = useState(false)

    const handleCopy = async()=>{
        try{
            await navigator.clipboard.writeText(shortUrl);
            toast.success("Link copiado para a área de transferência.")
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }catch(err){
            console.error("Erro ao copiar:", err)
        }
    }

    return(
        <div className="flex justify-between items-center bg-gray-800 mt-4 text-white p-3 rounded-xl shadow-md">
            <Link href={shortUrl} className="hover:border-b-[1px] border-white transition-all">
                <span className="truncate">{shortUrl}</span>
            </Link>
            <button
                onClick={handleCopy}
                className="ml-4 p-2 cursor-pointer rounded hover:bg-gray-700 transition-colors group relative"
            >
                {copied ? (
                    <Check className="text-green-400 transition-all duration-300" />
                ) : (
                    <Copy className="group-hover:text-green-300 transition-all duration-300" />
                )}
                <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-xs bg-black bg-opacity-70 px-2 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {copied ? "Copiado!" : "Copiar"}
                </span>
            </button>
        </div>
    )
}