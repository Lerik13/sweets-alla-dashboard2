import { auth } from '@/app/_lib/auth'
import NavButton from './NavButton'

export default async function NavLeft() {
  const session = await auth()
  if (!session) return null

  return (
    <>
      <NavButton />
    </>
  )
}
