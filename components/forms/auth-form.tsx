'use client'

import { type z } from 'zod'
import { userAuthAction } from '@/app/actions/auth'
import { authSchema } from '@/lib/validations/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '../ui/input'
import { toast } from 'sonner'

type Inputs = z.infer<typeof authSchema>

const defaultValues: Partial<Inputs> = {
  username: 'mor_2314',
  password: '83r5^_'
}

export function AuthForm () {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues
  })

  async function onSubmit (data: Inputs) {
    startTransition(async () => {
      try {
        const { token } = await userAuthAction(data)

        localStorage.setItem('token', token)
        router.push('/')
      } catch (err) {
        toast.error('Credenciales incorrectas')
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de usuario</FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type='password' {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='w-full'
          disabled={isPending}
        >
          {isPending && (
            <svg
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='animate-spin inline-block w-4 h-4 mr-2'
            >
              <path d='M21 12a9 9 0 1 1-6.219-8.56' />
            </svg>
          )}
          Iniciar sesión
        </Button>
      </form>
    </Form>
  )
}
