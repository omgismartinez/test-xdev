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
      <h1 className='text-center font-bold'>Producto</h1>
      <ProductForm product={product} />
    </main>
  )
}
