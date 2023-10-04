import React from 'react'

export default function HomeLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className='max-w-6xl mx-auto py-5 px-2'>
      {children}
    </main>
  )
}
