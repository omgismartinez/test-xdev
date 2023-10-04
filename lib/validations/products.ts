import { z } from 'zod'

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.string(),
  category: z.string(),
  description: z.string(),
  image: z.string()
})

export type Product = z.infer<typeof productSchema>
