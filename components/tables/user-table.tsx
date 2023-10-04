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
import { type User } from '@/lib/validations/user'
import { type ColumnDef } from '@tanstack/react-table'
import {
  MoreHorizontal,
  Pen,
  Trash
} from 'lucide-react'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'

interface UserTableProps {
  data: User[]
}

export function UserTable ({ data }: UserTableProps) {
  const [isPending, startTransition] = useTransition()
  const [userData, setUserData] = useState<User[]>(data)

  const handleDeleteUser = (id: number) => {
    setUserData((prevUserData) => prevUserData.filter((user) => user.id !== id))
  }

  const columns: Array<ColumnDef<User, unknown>> = [
    {
      id: 'id',
      accessorKey: 'id',
      header: ({ column }) => (
        <TableHeader column={column} title={'ID'} />
      ),
      enableHiding: false
    },
    {
      id: 'username',
      accessorKey: 'username',
      header: 'Nombre de usuario'
    },
    {
      id: 'email',
      accessorKey: 'email',
      header ({ column }) {
        return (
          <TableHeader column={column} title={'Correo electrónico'} />
        )
      },
      enableHiding: false
    },
    {
      id: 'firstname',
      accessorKey: 'name.firstname',
      header: 'Nombre'
    },
    {
      id: 'lastname',
      accessorKey: 'name.lastname',
      header: 'Apellido'
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
                  href={`/users/${row.original.id}`}
                >
                    <Pen className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
                    Ver más
                </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                startTransition(() => {
                  toast.promise(
                    deleteUserAction({
                      id: row.original.id
                    }),
                    {
                      loading: 'Borrando usuario...',
                      success: () => {
                        handleDeleteUser(row.original.id)
                        return 'Usuario borrado'
                      },
                      error: (err: unknown) => catchError(err)
                    }
                  )
                })
              }}
              disabled={isPending}
            >
              <Trash className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
              Borrar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={userData}
      resetRows={() => setUserData(data)}
      newRowLink='/users/new'
    />
  )
}
