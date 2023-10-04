import { type User } from '@/lib/validations/user'
import { UserTable } from '@/components/tables/user-table'
import { ReturnLink } from '@/components/return-link'

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
    <main className='h-full space-y-2'>
      <ReturnLink go='/' />
      <h1 className='text-center italic font-bold uppercase'>Users</h1>
      <div className='flex justify-center items-center'>
        <UserTable data={users} />
      </div>
    </main>
  )
}
