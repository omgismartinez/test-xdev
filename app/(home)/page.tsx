import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Shirt, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='min-h-[450px] flex items-center justify-center'>
      <div className='space-x-6'>
        <Link href={'/users'}
          className={cn(buttonVariants({
            variant: 'outline',
            size: 'lg'
          }), 'hover:bg-primary')}
        >
          <Users className='w-6 h-6 inline-block mr-2' />
          Usuarios
        </Link>
        <Link href={'/products'}
          className={cn(buttonVariants({
            variant: 'outline',
            size: 'lg'
          }), 'hover:bg-primary')}
        >
          <Shirt className='w-6 h-6 inline-block mr-2' />
          Productos
        </Link>
      </div>
    </main>
  )
}
