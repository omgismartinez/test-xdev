import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

export default function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex justify-center items-center min-h-screen'>
      {children}
    </main>
  )
}
