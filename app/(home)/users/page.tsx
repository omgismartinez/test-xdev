import { type User } from '@/lib/validations/user'
import { UserTable } from '@/components/tables/user-table'
import Header from '@/components/header'

async function getUsers () {
  const res = await fetch('https://fakestoreapi.com/users')

  const data: User[] = await res.json()

  const filteredData = data.map((user) => {
    const { password, ...userDataWithoutPassword } = user
    return userDataWithoutPassword
  })

  return filteredData
}

export default async function Users () {
  const users = await getUsers()
  return (
    <main className='h-full space-y-4'>
      <Header goTo='/' title='Lista de Usuarios' />
      <UserTable data={users} />
    </main>
  )
}
