import { getProduct, getProducts } from '@/app/_lib/data-service'
import Product from '@/app/_components/Product'

//export const metadata = { title: 'Product' }

export async function generateMetadata({ params }) {
  const { productId } = await params
  const { name } = await getProduct(productId)
  return { title: `Product ${name}` }
}

export async function generateStaticParams() {
  const products = await getProducts()
  const ids = products.map((product) => ({ productId: String(product.id) }))
  return ids
}

export default async function Page({ params }) {
  const { productId } = await params
  const product = await getProduct(productId)

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Product product={product} />
    </div>
  )
}
