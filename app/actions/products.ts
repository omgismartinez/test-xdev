'use server'

import type {
  getProductSchema,
  Product,
  productSchema
} from '@/lib/validations/products'
import { revalidatePath } from 'next/cache'
import { type z } from 'zod'

export async function getProductsAction () {
  const products = await fetch('https://fakestoreapi.com/products')
  const data: Product = await products.json()
  return data
}

export async function getProductAction (
  input: z.infer<typeof getProductSchema>
) {
  const product = await fetch(`https://fakestoreapi.com/products/${input.id}`)

  if (!product) {
    throw new Error('User not found')
  }

  const data: z.infer<typeof productSchema> = await product.json()

  return data
}

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

  revalidatePath('/(home)/product/[id]', 'page')
}
