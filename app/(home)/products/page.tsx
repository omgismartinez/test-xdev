import { type Product } from '@/lib/validations/products'
import { ProductTable } from '@/components/tables/products-table'
import Header from '@/components/header'

async function getProducts () {
  const res = await fetch('https://fakestoreapi.com/products')

  const data: Product[] = await res.json()

  return data
}

export default async function Products () {
  const products = await getProducts()
  return (
    <main className='h-full space-y-4'>
      <Header goTo='/' title='Lista de Productos' />
      <ProductTable data={products} />
    </main>
  )
}
