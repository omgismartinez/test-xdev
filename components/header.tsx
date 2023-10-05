import React from 'react'
import { ReturnLink } from './return-link'

interface Props {
  goTo: string
  title: string | React.ReactNode
}

export default function Header ({ goTo, title }: Props) {
  return (
    <div className='flex items-center justify-between border-b py-4 px-3'>
      <ReturnLink go={goTo} />
      <h3 className='text-lg font-semibold'>{title}</h3>
    </div>
  )
}
