"use client";
import { EncurtarData } from "@/validations/encurtar.validation";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form"

export const InputsFormEncurtar = ({shortUrl}: {shortUrl: boolean})=>{
    const {register, reset, formState: {errors}} = useFormContext<EncurtarData>();

    useEffect(()=>{
        if(shortUrl) reset();
    },[shortUrl])

    return(
        <>
            <div className="flex w-full">
                <input
                    {...register("original")}
                    placeholder="Cole o link aqui"
                    className="bg-white h-11 w-full p-2 text-xl outline-none border-[1px]"
                />
                <button className="bg-blue-600 text-white h-11 px-2 font-bold transition-all hover:bg-blue-700 cursor-pointer">ENCURTAR</button>
            </div>
            <span className="text-white">{errors?.original && errors.original?.message}</span>
        </>
    )
}
