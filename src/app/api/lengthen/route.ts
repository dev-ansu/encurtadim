import prisma from "@/lib/prisma";
import { DesencurtarSchema } from "@/validations/desencurtar.validation copy";
import { NextRequest, NextResponse } from "next/server";
// import csrf from "csrf";

// const tokens = new csrf();
// const secret = process.env.CSRF_SECRET || tokens.secretSync();

export async function POST(request: NextRequest){
    try{
        const body = await request.json();
        
        // if (!tokens.verify(secret, body.csrfToken)) {
        //     return NextResponse.json({ error: "Invalid CSRF token" }, { status: 403 });
        // }
        
        const { success, data, error } = DesencurtarSchema.safeParse(body)

        if(!success) return NextResponse.json({success, message: "Não foi possível encurtar a URL. Tente novamente!", issues: error.issues}, {status: 400})
        
        const { shortUrl } = data;

        const url = new URL(shortUrl);
        const slug = url.pathname.split("/").pop(); 

        
        const res = await prisma.shortUrl.findFirst({
            where:{
                slug: slug,
            }
        });
 

        if(res) return NextResponse.json({success: true, originalUrl: res.original})
        
        return NextResponse.json({success: false, message:"URL não encontrada."})
    }catch(err){
        console.error(err)
        return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
    } 
}