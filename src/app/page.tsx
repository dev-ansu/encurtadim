import prisma from "@/lib/prisma";
import Image from "next/image";
import AnimateNumber from "./AnimateNumber";

export default async function Home() {
  const qtdUrlsEncurtadas = await prisma.shortUrl.count();
  
  return (
      <div className="w-full flex flex-col mt-16 justify-start items-center h-screen max-h-screen overflow-hidden">
          <Image alt="hero" src="/hero.png"  width={500} height={500} />
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              O Encurtadim é uma ferramenta encurtadora de URL
            </p>
            <p className="text-gray-400">
              Com o Encurtadim é possível criar um link encurtado fácil de compartilhar.
            </p>
          </div>
          <div className="bg-white rounded px-2 w-56 mt-4 text-center py-2 hover:bg-gray-200">
            <span className="font-medium">+<AnimateNumber number={qtdUrlsEncurtadas}  /> links encurtados</span>
          </div>
          
      </div>
  );
}
