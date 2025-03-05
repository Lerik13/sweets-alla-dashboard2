'use client'

import Link from 'next/link'
import {
  CakeIcon,
  TagIcon,
  ExclamationCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/solid'
import { useSidebar } from './context/SidebarContext'

export default function NavSidebar() {
  const { closeSidebar } = useSidebar()

  return (
    <nav className="pt-8">
      <ul className="space-y-14 text-xl px-6" onClick={() => closeSidebar()}>
        <li>
          <Link
            href="/dashboard/products"
            className="link-with-icon flex space-x-3 items-center hover:text-accent-700"
          >
            <CakeIcon />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/categories"
            className="link-with-icon flex space-x-3 items-center hover:text-accent-700"
          >
            <TagIcon />
            <span>Categories</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/hero"
            className="link-with-icon flex space-x-3 items-center hover:text-accent-700"
          >
            <ExclamationCircleIcon />
            <span>Hero Block</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/reviews"
            className="link-with-icon flex space-x-3 items-center hover:text-accent-700"
          >
            <ChatBubbleLeftEllipsisIcon />
            <span>Reviews</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className="link-with-icon flex space-x-3 items-center hover:text-accent-700"
          >
            <Cog8ToothIcon />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
