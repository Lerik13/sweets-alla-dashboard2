'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

function FilterProducts({ categories }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const activeFilter = searchParams.get('category') ?? 'all'

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams)
    params.set('category', filter)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <ul className="border border-accent-800 flex flex-wrap justify-center">
      <li key="all">
        <Button
          filter="all"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          All sweets
        </Button>
      </li>

      {categories.map((category) => (
        <li key={category.id}>
          <Button
            filter={category.id}
            handleFilter={handleFilter}
            activeFilter={activeFilter}
          >
            {category.name}s
          </Button>
        </li>
      ))}
    </ul>
  )
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-accent-800 hover:text-primary-50 ${
        filter == activeFilter && 'bg-accent-500 text-primary-50'
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  )
}

export default FilterProducts
