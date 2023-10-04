import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  username: z.string(),
  password: z.string().optional(),
  name: z.object({
    firstname: z.string(),
    lastname: z.string()
  }),
  address: z.object({
    city: z.string(),
    street: z.string(),
    number: z.number(),
    zipcode: z.string(),
    geolocation: z.object({
      lat: z.string(),
      long: z.string()
    })
  }),
  phone: z.string()
})

export type User = z.infer<typeof userSchema>

export const getUserSchema = z.object({
  id: z.number()
})
