'use server'

import { type productSchema } from '@/lib/validations/products'
import { revalidatePath } from 'next/cache'
import { type z } from 'zod'

export async function updateProductAction (
  input: z.infer<typeof productSchema
  >
) {
  const product = await fetch(`https://fakestoreapi.com/products/${input.id}`, {
    method: 'PUT',
    body: JSON.stringify(input)
  })

  if (!product) {
    throw new Error('User not found')
  }

  revalidatePath('/product/[id]')
}
