'use server'

import { type z } from 'zod'
import type {
  userSchema,
  getUserSchema
} from '@/lib/validations/user'
import { revalidatePath } from 'next/cache'

export async function newUserAction (
  input: z.infer<typeof userSchema>
) {
  console.log('newUserAction', input)
  const user = await fetch('https://fakestoreapi.com/users', {
    method: 'POST',
    body: JSON.stringify(input)
  })

  if (!user) {
    throw new Error('User not found')
  }

  revalidatePath('/users')
}

export async function deleteUserAction (
  input: z.infer<typeof getUserSchema
  >
) {
  const user = await fetch(`https://fakestoreapi.com/users/${input.id}`, {
    method: 'DELETE'
  })

  if (!user) {
    throw new Error('User not found')
  }

  revalidatePath('/users')
}
