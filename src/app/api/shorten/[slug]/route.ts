import { DesencurtarSchema } from "@/validations/desencurtar.validation copy";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(request: NextRequest, { params }: {params: Promise<{slug: string}>})=>{
    const { slug } = await params;

    try{
        const { slug } = await params;
        const { success, data, error } = DesencurtarSchema.safeParse(slug)
        
        if(!success) return NextResponse.json({success, message: "Não foi possível encurtar a URL. Tente novamente!", issues: error.issues}, {status: 400})

        return NextResponse.json({success: true})

    }catch(err){
        
    }
    
    return NextResponse.json({success: true, slug})
}