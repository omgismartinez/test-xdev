import { UserForm } from '@/components/forms/user-form'
import Header from '@/components/header'

export default function NewUser () {
  return (
    <div className='space-y-8'>
      <Header goTo='/users' title='Nuevo Usuario' />
      <UserForm />
    </div>
  )
}
