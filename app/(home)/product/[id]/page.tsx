import { getProductAction } from '@/app/actions/products'
import Header from '@/components/header'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductId ({ params }: { params: { id: string } }) {
  const product = await getProductAction({ id: Number(params.id) })
  return (
    <main className='space-y-8'>
      <Header goTo='/products' title='Producto' />

      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 space-y-2 gap-8'>
          <div className='grid-cols-1'>
            <Image
              src={product.image}
              alt={product.title}
              width='0'
              height='0'
              sizes='100vw'
              priority
              className='rounded-md w-full h-auto max-w-sm mx-auto'
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

            <div className='flex justify-end'>
              <Link
                href={`/product/${params.id}/edit`}
                className={cn(buttonVariants({
                  variant: 'outline',
                  size: 'sm'
                }), 'self-baseline')}
              >
                Editar
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
