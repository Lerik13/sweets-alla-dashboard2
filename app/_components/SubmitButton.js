'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton({
  children,
  pendingLabel = 'Updating...',
}) {
  const { pending } = useFormStatus()

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-900 font-semibold hover:bg-accent-800 hover:text-primary-100 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  )
}
