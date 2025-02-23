import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/app/_lib/auth'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

export default async function NavRight() {
  const session = await auth()
  //console.log(session)

  if (session)
    return (
      <div className="z-10">
        <SignOutButton />
      </div>
    )

  return (
    <div className="z-10">
      <SignInButton />
    </div>
  )
}
