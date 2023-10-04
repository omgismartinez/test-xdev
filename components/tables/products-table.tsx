'use client'

import { deleteUserAction } from '@/app/actions/user'
import { DataTable } from '@/components/tables/components/table-data'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { TableHeader } from '@/components/tables/components/table-data-header'
import { catchError } from '@/lib/utils'
import { type ColumnDef } from '@tanstack/react-table'
import {
  MoreHorizontal,
  Trash
} from 'lucide-react'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
import { type Product } from '@/lib/validations/products'

interface ProductTableProps {
  data: Product[]
}

export function ProductTable ({ data }: ProductTableProps) {
  const [isPending, startTransition] = useTransition()
  const [productData, setProductData] = useState<Product[]>(data)

  const handleDeleteProduct = (id: number) => {
    setProductData((prevProductData) => prevProductData.filter((product) => product.id !== id))
  }

  const columns: Array<ColumnDef<Product, unknown>> = [
    {
      id: 'id',
      accessorKey: 'id',
      header: ({ column }) => (
        <TableHeader column={column} title={'ID'} />
      ),
      enableHiding: false
    },
    {
      id: 'price',
      accessorKey: 'price',
      header: ({ column }) => (
        <TableHeader column={column} title={'Precio'} />
      ),
      enableHiding: false
    },
    {
      id: 'title',
      accessorKey: 'title',
      header: 'Título'
    },
    {
      id: 'actions',
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
            >
              <MoreHorizontal className='h-4 w-4' />
              <span className='sr-only'>Menú abierto</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-[160px]'>
            <DropdownMenuItem asChild>
                <Link
                  href={`/products/${row.original.id}`}
                >
                    Ver más
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              onClick={() => {
                startTransition(() => {
                  toast.promise(
                    deleteUserAction({
                      id: row.original.id
                    }),
                    {
                      loading: 'Borrando usuario...',
                      success: () => {
                        handleDeleteProduct(row.original.id)
                        return 'Usuario borrado'
                      },
                      error: (err: unknown) => catchError(err)
                    }
                  )
                })
              }}
              disabled={isPending}
            >
              <div className='flex justify-between'>
                Borrar
                <Trash className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={productData}
      resetRows={() => setProductData(data)}
    />
  )
}
