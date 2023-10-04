import { ReturnLink } from '@/components/return-link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { type Product } from '@/lib/validations/products'
import Image from 'next/image'
import Link from 'next/link'

async function getUniqueProduct (id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)

  const data: Product = await res.json()

  return data
}

export default async function ProductId ({ params }: { params: { id: string } }) {
  const product = await getUniqueProduct(params.id)
  return (
    <main className='space-y-4'>
      <div className='space-x-2'>
        <ReturnLink go='/products' />
        <Link
            href={`/product/${params.id}/edit`}
            className={cn(buttonVariants({
              variant: 'default',
              size: 'sm'
            }))}
        >
          Editar
        </Link>
      </div>

      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 space-y-2 gap-4'>
          <div className='grid-cols-1'>
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className='rounded-md'
            />
          </div>
          <section>
            <div>
              Titulo: <span className='text-center font-semibold'>{product.title}</span>
            </div>
            <div>
              Precio: <span className='text-center font-semibold'>{product.price}</span>
            </div>
            <div>
              Descripción: <span className='text-center font-semibold'>{product.description}</span>
            </div>
            <div>
              Categoría: <span className='text-center font-semibold'>{product.category}</span>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
