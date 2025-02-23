import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo2.svg'

function Logo() {
  return (
    <Link href="/" className="hidden md:flex items-center gap-4 z-10">
      <Image src={logo} height="50" width="180" quality={100} alt="logo" />
    </Link>
  )
}

export default Logo
