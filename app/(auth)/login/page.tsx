import { AuthForm } from '@/components/forms/auth-form'

export default function Auth () {
  return (
    <main className='space-y-4 w-full'>
      <h1 className='text-center font-bold text-xl'>Inicia sesión</h1>
      <AuthForm />
    </main>
  )
}
