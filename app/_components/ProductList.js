//import { unstable_noStore as noStore } from 'next/cache'
import { getCategories, getProducts } from '@/app/_lib/data-service'
import ProductCard from './ProductCard'
import FilterProducts from './FilterProducts'

async function ProductList({ filter }) {
  //noStore() // make the dynamic

  const categories = await getCategories()
  const products = await getProducts()

  if (!products.length) return null

  let displayedProducts

  if (filter === 'all') displayedProducts = products
  else
    displayedProducts = products.filter(
      (product) => product.categoryId === Number(filter)
    )

  return (
		<>
			<div className="flex justify-end mb-4">
				<FilterProducts categories={categories} />
			</div>

			<div>
				<p className="text-primary-600 mb-4">
					Total: <span className="font-bold">{displayedProducts.length}</span>{' '}
					products
				</p>
				<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
					{displayedProducts.map((product) => (
						<ProductCard product={product} />
					))}
				</div>
			</div>
		</>
  )
}

export default ProductList
