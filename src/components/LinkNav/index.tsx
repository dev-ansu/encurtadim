import Link from "next/link"
import { ReactNode } from "react"

export const LinkNav = ({ children, url, className }: { children: ReactNode, url: string, className?: string})=>{
    const classes = "px-6 flex gap-1 items-center py-1 text-white rounded border-[1px] border-[#232323] transition-all hover:border-white " + className
    
    return(
        <Link href={url} className={classes}>
            {children}
        </Link>
    )
}