import Image from 'next/image'
import bg from '@/public/bg.png'
import SignInButton from '@/app/_components/SignInButton'

export default function Page() {
  return (
    <div className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Bakery background image"
      />

      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl text-accent-50 mb-10 tracking-tight font-normal">
          Welcome to Dashboard
        </h1>
        <div className="mt-20">{/* <SignInButton /> */}</div>
      </div>
    </div>
  )
}
