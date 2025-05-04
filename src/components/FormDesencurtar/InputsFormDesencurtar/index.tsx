"use client";
import { DesencurtarData } from "@/validations/desencurtar.validation copy";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form"

export const InputsFormEncurtar = ({shortUrl}: {shortUrl: boolean})=>{
    const {register, reset, formState: {errors}} = useFormContext<DesencurtarData>();

    useEffect(()=>{
        if(shortUrl) reset();
    },[shortUrl])

    return(
        <>
            <div className="flex w-full">
                <input
                    {...register("shortUrl")}
                    placeholder="Cole o link aqui"
                    className="bg-white h-11 w-full p-2 text-xl outline-none border-[1px]"
                />
                <button className="bg-blue-600 text-white h-11 px-2 font-bold transition-all hover:bg-blue-700 cursor-pointer">DESENCURTAR</button>
            </div>
            <span className="text-white">{errors?.shortUrl && errors.shortUrl?.message}</span>
        </>
    )
}