'use client'

import * as React from 'react'
import Link from 'next/link'
// import type {
//   DataTableFilterableColumn,
//   DataTableSearchableColumn
// } from '@/types'
import { Cross2Icon, PlusCircledIcon, ReloadIcon } from '@radix-ui/react-icons'
import type { Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { DataTableFacetedFilter } from '@/components/data-table/data-table-faceted-filter'
// import { DataTableViewOptions } from '@/components/data-table/data-table-view-options'

interface TableToolbarProps<TData> {
  table: Table<TData>
  // filterableColumns?: Array<DataTableFilterableColumn<TData>>
  // searchableColumns?: Array<DataTableSearchableColumn<TData>>
  resetRows?: () => void
  newRowLink?: string
  deleteRowsAction?: React.MouseEventHandler<HTMLButtonElement>
}

export function TableToolbar<TData> ({
  table,
  // filterableColumns = [],
  // searchableColumns = [],
  resetRows,
  newRowLink,
  deleteRowsAction
}: TableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className='flex w-full items-center justify-between space-x-2 overflow-auto p-1'>
      <div className='flex flex-1 items-center space-x-2'>
        {isFiltered && (
          <Button
            aria-label='Reset filters'
            variant='ghost'
            className='h-8 px-2 lg:px-3'
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' aria-hidden='true' />
          </Button>
        )}
      </div>
      <div className='flex items-center space-x-2'>
        {newRowLink && (
          <Link aria-label='Create new row' href={newRowLink}>
            <div
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                  className: 'h-8'
                })
              )}
            >
              <PlusCircledIcon className='mr-2 h-4 w-4' aria-hidden='true' />
              Nuevo
            </div>
          </Link>
        )}
        {resetRows && (
          <Button
            aria-label='Reset rows'
            variant='outline'
            size='sm'
            className='h-8'
            onClick={() => resetRows()}
          >
            <ReloadIcon className='mr-2 h-4 w-4' aria-hidden='true' />
            Reiniciar
          </Button>
        )}
        {/* <DataTableViewOptions table={table} /> */}
      </div>
    </div>
  )
}
