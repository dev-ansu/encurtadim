"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormHTMLAttributes, ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ZodType, ZodTypeDef } from "zod";

export interface FormProps<T extends FieldValues = any> extends FormHTMLAttributes<HTMLFormElement>{
    children: ReactNode;
    resolver: ZodType<T, ZodTypeDef, T>;
    onValidSubmit: SubmitHandler<T>;
}
const Form = <T extends FieldValues>({children, resolver, onValidSubmit, ...props}: FormProps)=>{

    const methods = useForm({
        mode:"onTouched",
        resolver: zodResolver(resolver)
    });
    
    return(
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onValidSubmit)} {...props}>
                {children}
            </form>
        </FormProvider>
    )
}

export default Form;