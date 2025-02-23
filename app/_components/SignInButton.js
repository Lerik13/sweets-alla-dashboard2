import { signInAction } from '@/app/_lib/actions'

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-3 md:gap-6 text-lg border border-accent-700 px-2 md:px-10 py-4 font-medium text-accent-800 hover:bg-accent-100 transition-all duration-300">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  )
}

export default SignInButton
