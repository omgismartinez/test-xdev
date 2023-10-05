import { UserForm } from '@/components/forms/user-form'
import { ReturnLink } from '@/components/return-link'

export default function NewUser () {
  return (
    <div className='space-y-6'>
      <ReturnLink go={'/users'} />
      <div>
        <h3 className='text-lg font-medium'>Nuevo usuario</h3>
        <p className='text-sm text-muted-foreground'>
          Crea un nuevo usuario
        </p>
      </div>
      <UserForm />
    </div>
  )
}
