import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

interface ReturnLinkProps {
  go: string
}

export function ReturnLink ({ go }: ReturnLinkProps) {
  return (
    <Link href={go}>
        <div
          className={cn(buttonVariants({
            variant: 'secondary',
            size: 'sm'
          }))}
        >
          Volver
        </div>
      </Link>
  )
}
