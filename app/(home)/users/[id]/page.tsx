import { getUserAction } from '@/app/actions/user'
import { UserForm } from '@/components/forms/user-form'
import Header from '@/components/header'

export default async function UserId ({ params }: { params: { id: string } }) {
  const user = await getUserAction({ id: Number(params.id) })
  return (
    <main className='space-y-8'>
      <Header goTo='/users' title='Usuario' />
      <UserForm user={user} />
    </main>
  )
}
