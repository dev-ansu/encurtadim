import prisma from "@/lib/prisma";
import { EncurtarSchema } from "@/validations/encurtar.validation";
import { nanoid } from "nanoid";
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

        const { success, data, error } = EncurtarSchema.safeParse(body)

        if(!success) return NextResponse.json({success, message: "Não foi possível encurtar a URL. Tente novamente!", issues: error.issues}, {status: 400})
        
        const { original } = data;
        let slug: string;
        let exists: boolean = true;

        do{

            slug = nanoid(6);
            const existing = await prisma.shortUrl.findUnique({
                where:{
                    slug
                }
            })
            exists = !!existing;

        }while(exists)
        
        await prisma.shortUrl.create({
            data:{
                original: original,
                slug: slug,
            }
        });

        return NextResponse.json({success: true, shortURL: process.env.APP_URL + "/" + slug, original})

    }catch(err){
        console.error(err)
        return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
    } 
}