import { UserForm } from '@/components/forms/user-form'
import { ReturnLink } from '@/components/return-link'
import { type User } from '@/lib/validations/user'

async function getUniqueUser (id: string) {
  const res = await fetch(`https://fakestoreapi.com/users/${id}`)

  const data: User = await res.json()

  return data
}

export default async function UserId ({ params }: { params: { id: string } }) {
  const user = await getUniqueUser(params.id)
  return (
    <main>
      <ReturnLink go='/users' />
      <h1 className='text-center italic font-bold uppercase'>Usuario</h1>
      <UserForm user={user} />
    </main>
  )
}
