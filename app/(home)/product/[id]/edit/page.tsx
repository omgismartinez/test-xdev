import { getProductAction } from '@/app/actions/products'
import { ProductForm } from '@/components/forms/product-form'
import Header from '@/components/header'

export default async function EditProduct ({ params }: { params: { id: string } }) {
  const product = await getProductAction({ id: Number(params.id) })
  return (
    <main className='max-w-2xl mx-auto space-y-8'>
      <Header goTo={`/product/${params.id}`} title='Editar Producto' />
      <ProductForm product={product} />
    </main>
  )
}
