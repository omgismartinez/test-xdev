import { type Product } from '@/lib/validations/products'
import { ReturnLink } from '@/components/return-link'
import { ProductTable } from '@/components/tables/products-table'

async function getProducts () {
  const res = await fetch('https://fakestoreapi.com/products')

  const data: Product[] = await res.json()

  return data
}

export default async function Users () {
  const products = await getProducts()
  return (
    <main className='h-full space-y-2'>
      <ReturnLink go='/' />
      <h1 className='text-center font-bold'>Productos</h1>
      <div className='flex justify-center items-center'>
        <ProductTable data={products} />
      </div>
    </main>
  )
}
