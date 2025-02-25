//import { unstable_noStore as noStore } from 'next/cache'
import { getProducts } from '@/app/_lib/data-service'
import ProductCard from './ProductCard'

async function ProductList({ filter }) {
  //noStore() // make the dynamic

  const products = await getProducts()

  if (!products.length) return null

  let displayedProducts

  if (filter === 'all') displayedProducts = products
  else
    displayedProducts = products.filter(
      (product) => product.categoryId === Number(filter)
    )

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {displayedProducts.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}

export default ProductList
