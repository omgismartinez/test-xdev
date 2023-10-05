import { cn } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
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
            size: 'sm'
          }))}
        >
          <ArrowLeftIcon />
        </div>
      </Link>
  )
}
