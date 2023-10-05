'use server'

import { type z } from 'zod'
import type {
  userSchema,
  getUserSchema
} from '@/lib/validations/user'
import { revalidatePath } from 'next/cache'

export async function getUsersAction () {
  const res = await fetch('https://fakestoreapi.com/users')

  if (!res) {
    throw new Error('Users not found')
  }

  const users: Array<z.infer<typeof getUserSchema>> = await res.json()

  return users
}

export async function getUserAction (
  input: z.infer<typeof getUserSchema>
) {
  const res = await fetch(`https://fakestoreapi.com/users/${input.id}`)

  if (!res) {
    throw new Error('User not found')
  }

  const user: z.infer<typeof userSchema> = await res.json()

  return user
}

export async function newUserAction (
  input: z.infer<typeof userSchema>
) {
  const res = await fetch('https://fakestoreapi.com/users', {
    method: 'POST',
    body: JSON.stringify(input)
  })

  if (!res) {
    throw new Error('User not found')
  }

  const newUser: { id: number } = await res.json()

  return newUser
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
