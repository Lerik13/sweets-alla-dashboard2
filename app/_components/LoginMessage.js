import Link from 'next/link'

function LoginMessage() {
  return (
    <div className="grid bg-accent-200 ">
      <p className="text-center text-xl py-12 self-center">
        Please{' '}
        <Link href="/login" className="underline text-accent-700">
          login
        </Link>{' '}
        to have access
        <br />
        to dashboard
      </p>
    </div>
  )
}

export default LoginMessage
