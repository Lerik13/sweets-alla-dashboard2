import Logo from './Logo'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

function Header() {
  return (
    <header className="border-b border-primary-200 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        <NavLeft />

        <Logo />

        <NavRight />
      </div>
    </header>
  )
}

export default Header
