import { z } from "zod";

export const DesencurtarSchema = z.object({
    shortUrl: z.string().url("Digite uma URL válida.").max(2048, "A URL só pode ter no máximo 2048 caracteres."),
});


export type DesencurtarData = z.infer<typeof DesencurtarSchema>