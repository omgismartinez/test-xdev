'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { catchError } from '@/lib/utils'
import { productSchema } from '@/lib/validations/products'
import { updateProductAction } from '@/app/actions/products'
import { Textarea } from '../ui/textarea'
import { useRouter } from 'next/navigation'

type Inputs = z.infer<typeof productSchema>

const defaultValues: Partial<Inputs> = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic'
}

interface ProductFormProps {
  product?: Inputs

}

export function ProductForm ({ product }: ProductFormProps) {
  const [isPending, startTransition] = useTransition()

  const { push } = useRouter()

  const form = useForm<Inputs>({
    resolver: zodResolver(productSchema),
    defaultValues: product ?? defaultValues
  })

  function onSubmit (data: Inputs) {
    startTransition(async () => {
      try {
        if (product) {
          toast.promise(
            updateProductAction({
              ...data
            }),
            {
              loading: 'Actualizando producto...',
              success: () => {
                push(`/product/${data.id}`)
                return 'Producto actualizado'
              },
              error: (err: unknown) => catchError(err)
            }
          )
        }

        form.reset()
      } catch (err) {
        catchError(err)
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 grid'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Descripción del producto'
                  className='resize-none'
                  rows={6}
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input type='url' {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input type='number' {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoría</FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {product
          ? (
              <Button type='submit' disabled={isPending}>
                Actualizar
              </Button>
            )
          : (
              <Button type='submit' disabled={isPending}>
                Crear usuario
              </Button>
            )}
      </form>
    </Form>
  )
}
