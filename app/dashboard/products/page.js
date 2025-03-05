import { Suspense } from 'react'
import Spinner from '@/app/_components/Spinner'
import ProductList from '@/app/_components/ProductList'

export const metadata = {
  title: 'Products',
}

export default async function Page({ searchParams }) {
  let { category } = await searchParams
  if (!category) category = 'all'

  return (
    <div>
      <h1 className="text-4xl text-accent-400 font-medium mb-4">
        Sweet Products
      </h1>

      <Suspense fallback={<Spinner />} key={category}>
        <ProductList filter={category} />
      </Suspense>
    </div>
  )
}
