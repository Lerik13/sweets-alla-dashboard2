import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import page404 from '@/public/page404.webp'

function NotFound() {
  return (
    <div className="flex flex-col text-center">
      <div className="mx-auto overflow-hidden">
        <Image
          src={page404}
          alt="This page could not be found"
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="my-4 font-serif text-3xl">
        Sorry, this page is eating a donut.
      </h2>
      <p className="mt-5 flex justify-center">
        <Link
          href="/"
          className="py-3 px-5 bg-accent-500 hover:bg-accent-800 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-900"
        >
          <ArrowLeftIcon className="h-5 w-5 text-primary-900" />
          <span>Go back home</span>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
