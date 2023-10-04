import { type productSchema } from '@/lib/validations/products'
import { revalidatePath } from 'next/cache'
import { type z } from 'zod'

export async function updateProduct (
  input: z.infer<typeof productSchema
  >
) {
  const user = await fetch(`https://fakestoreapi.com/products/${input.id}`, {
    method: 'PUT',
    body: JSON.stringify(input)
  })

  if (!user) {
    throw new Error('User not found')
  }

  revalidatePath('/products')
}
