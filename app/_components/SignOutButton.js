import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { signOutAction } from '@/app/_lib/actions'

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-accent-800 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-900 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-900" />
        <span>Sign out</span>
      </button>
    </form>
  )
}

export default SignOutButton
