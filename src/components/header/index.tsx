import { Home, Link2, Lock } from "lucide-react"
import { LinkNav } from "../LinkNav"
import Link from "next/link"

export const Header = ()=>{
    return(
        <header className="w-full border-b-2 border-blue-700 p-2">
            <Link href="/">
                <div className="flex text-white items-center gap-2">
                    <Link2 size={32} className="bg-blue-500 rounded" /> 
                    <h1 className="text-2xl">Encurtadim</h1>
                </div>
            </Link>

            <nav className="flex flex-col justify-center gap-2 mt-4 items-center md:flex-row md:justify-between">

                <div className="flex flex-col gap-2 md:flex-row">
                    <LinkNav url="/">
                        <Home size={16} /> Home
                    </LinkNav>
                    <LinkNav url="/shorten">
                        <Link2 size={16} /> Encurtar
                    </LinkNav>
                    <LinkNav url="/lengthen">
                        <Link2 size={16} /> Desencurtar
                    </LinkNav>
                </div>

                <div>
                    <button className="cursor-pointer">
                        <Lock size={32} color="#fff"/>                    
                    </button>
                </div>

            </nav>
        </header>
    )
}