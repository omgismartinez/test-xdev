import { NextResponse } from 'next/server'

export async function POST (req: Request): Promise<any> {
  const data = await req.formData()

  const username = data.get('username')
  const password = data.get('password')

  if (!username || !password) {
    return {
      status: 400,
      body: {
        message: 'Username or password is missing'
      }
    }
  }

  const res = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password
    })
  })

  if (!res) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = await res.json()

  return NextResponse.json(token)
}
