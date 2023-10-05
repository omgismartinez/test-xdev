'use server'

import { type z } from 'zod'
import { type authSchema } from '@/lib/validations/auth'
import { cookies } from 'next/headers'

export async function userAuthAction (
  input: z.infer<typeof authSchema>
) {
  const res = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input)
  })

  if (!res.ok) {
    throw new Error('User not found')
  }

  const { token } = await res.json()

  // Set token in cookie
  // for future requests to API server
  cookies().set('token', token)

  return { token }
}

export async function userLogoutAction () {
  // Remove token from cookie
  cookies().delete('token')

  return true
}
