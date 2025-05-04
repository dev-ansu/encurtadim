import { Suspense } from "react";
import prisma from "@/lib/prisma";
import { Loader } from "lucide-react";
import { NotFoundUrl } from "./components/NotFoundUrl";
import { RedirectClient } from "./components/RedirectClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aguarde...",
};

// Componente para buscar a URL encurtada de forma assíncrona
async function fetchShortUrl(slug: string) {
  return await prisma.shortUrl.findUnique({
    where: { slug },
  });
}

// Componente principal
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slug) return <NotFoundUrl />;

  // Componente Suspense que lida com a renderização assíncrona
  return (
    <Suspense fallback={
        <div className="flex flex-col text-white mt-8 justify-center items-center">
            <h1 className="text-6xl">Aguarde...</h1>
            <Loader className="animate-spin" size={400} color="#fff" />
        </div>
    }>
      <UrlRedirect slug={slug} />
    </Suspense>
  );
}

// Componente para lidar com o redirecionamento
async function UrlRedirect({ slug }: { slug: string }) {
  const shortUrl = await fetchShortUrl(slug);

  if (!shortUrl) {
    return <NotFoundUrl />;
  }

  return <RedirectClient to={shortUrl.original} />;
}