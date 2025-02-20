import { signInAction } from '@/app/_lib/actions'

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-accent-700 px-10 py-4 font-medium text-accent-700">
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
