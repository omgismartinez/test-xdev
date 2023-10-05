import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='flex items-center justify-center'>
      <div className='space-x-6'>
        <Link href={'/users'}
          className={cn(buttonVariants({
            variant: 'outline',
            size: 'lg'
          }), 'hover:bg-primary')}
        >
          Usuarios
        </Link>
        <Link href={'/products'}
          className={cn(buttonVariants({
            variant: 'outline',
            size: 'lg'
          }), 'hover:bg-primary')}
        >
          Productos
        </Link>
      </div>
    </main>
  )
}
