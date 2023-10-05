import Navbar from '@/components/navbar'
import React from 'react'

export default function HomeLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen max-w-6xl mx-auto py-5 px-4'>
      <Navbar />
      {children}
    </main>
  )
}
