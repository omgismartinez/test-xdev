import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: 'Inicia sesión en tu cuenta'
}

export default function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main
      className='
        flex
        justify-center
        items-center
        max-w-sm
        mx-auto
        min-h-screen
        py-5
        px-4
      '
    >
      {children}
    </main>
  )
}
