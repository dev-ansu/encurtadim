import { LinkNav } from "@/components/LinkNav"


export const NotFoundUrl = ()=>{
    return(
        <div className="w-full flex flex-col  items-center h-full mt-16">
            <h2 className="text-6xl text-white font-bold">URL não encontrada</h2>
            <LinkNav url="/" className="mt-4">Voltar</LinkNav>
        </div>
    )
}