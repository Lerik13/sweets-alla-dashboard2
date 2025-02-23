'use client'

import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import { useSidebar } from './context/SidebarContext'

export default function NavLeft() {
  const { openSidebar } = useSidebar()

  return (
    <button
      className="button-icon border-primary-200 border"
      onClick={openSidebar}
    >
      <Bars3CenterLeftIcon />
    </button>
  )
}
