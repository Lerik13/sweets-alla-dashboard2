import { Suspense } from 'react'
import Spinner from '@/app/_components/Spinner'
import ProductList from '@/app/_components/ProductList'
import FilterProducts from '@/app/_components/FilterProducts'
import { getCategories } from '@/app/_lib/data-service'

export const metadata = {
  title: 'Products',
}

export default async function Page({ searchParams }) {
  let { category } = await searchParams
  if (!category) category = 'all'

  const categories = await getCategories()
  //console.log(categories)

  return (
    <div>
      <h1 className="text-4xl text-accent-400 font-medium mb-4">
        Sweet Products
      </h1>

      <div className="flex justify-end mb-8">
        <FilterProducts categories={categories} />
      </div>

      <Suspense fallback={<Spinner />} key={category}>
        <ProductList filter={category} />
      </Suspense>
    </div>
  )
}
