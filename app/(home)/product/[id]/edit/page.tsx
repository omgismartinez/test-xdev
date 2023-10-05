import { ProductForm } from '@/components/forms/product-form'
import { ReturnLink } from '@/components/return-link'

async function getUniqueProduct (id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)

  const data = await res.json()

  return data
}

export default async function EditProduct ({ params }: { params: { id: string } }) {
  const product = await getUniqueProduct(params.id)
  return (
    <main className='max-w-lg mx-auto space-y-3'>
      <ReturnLink go={`/product/${params.id}`} />
      <div>
        <h3 className='text-lg font-medium'>Editar producto</h3>
        <p className='text-sm text-muted-foreground'>
          Edita un producto
        </p>
      </div>
      <ProductForm product={product} />
    </main>
  )
}
