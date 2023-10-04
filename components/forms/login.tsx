'use client'

import { useRouter } from 'next/navigation'

export function LoginForm () {
  const router = useRouter()

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = await fetch('api/auth/login', {
      method: 'POST',
      body: formData
    })

    const json = await data.json()

    localStorage.setItem('token', json.token)
    router.push('/')
  }

  return (
    <form onSubmit={login}>
      <div className='flex flex-col gap-1'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' className='bg-transparent border' defaultValue={'mor_2314'} />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' className='bg-transparent border' defaultValue={'83r5^_'} />
      </div>

      <button type='submit' className='bg-sky-500 w-full rounded-md mt-4'>Login</button>
    </form>
  )
}
