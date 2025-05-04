import { z } from "zod";

export const EncurtarSchema = z.object({
    original: z.string().url("Digite uma URL válida.").max(2048, "A URL só pode ter no máximo 2048 caracteres.").refine((url) => url.startsWith("https://"), {
        message: "A URL deve começar com https://",
    }),
});


export type EncurtarData = z.infer<typeof EncurtarSchema>