'use client'

import { userLogoutAction } from '@/app/actions/auth'
import { LogOut } from 'lucide-react'
import { useTransition } from 'react'
import { Button } from './ui/button'

export default function Navbar () {
  const [isPending, startTransition] = useTransition()

  const handleLogout = () => {
    startTransition(async () => {
      try {
        await userLogoutAction()
          .then(() => localStorage.removeItem('token'))
          .then(() => window.location.reload())
      } catch (error) {
        console.error(error)
      }
    })
  }
  return (
    <div className='flex justify-end'>
      <Button
        disabled={isPending}
        onClick={handleLogout}
        size='sm'
      >
        {isPending
          ? <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='animate-spin inline-block w-4 h-4'
          >
            <path d='M21 12a9 9 0 1 1-6.219-8.56' />
          </svg>
          : <LogOut className='w-4 h-4' />}
      </Button>
    </div>
  )
}
