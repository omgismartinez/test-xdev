'use server'

import { type z } from 'zod'
import { type getUserSchema } from '@/lib/validations/user'
import { revalidatePath } from 'next/cache'

export async function deleteUserAction (
  input: z.infer<typeof getUserSchema>
) {
  console.log('deleteUserAction', input)
  const user = await fetch(`https://fakestoreapi.com/users/${input.id}`, {
    method: 'DELETE'
  })

  if (!user) {
    throw new Error('User not found')
  }

  revalidatePath('/users')
}
