import Image from 'next/image'
import { getCategories } from '@/app/_lib/data-service'
import { auth } from '@/app/_lib/auth'
import LoginMessage from './LoginMessage'
import ProductForm from './ProductForm'

async function Product({ product }) {
  const categories = await getCategories()
  const { id, name, description, image, categoryId } = product
  const session = await auth()

  if (!session || !session?.user)
    return (
      <div>
        <LoginMessage />
      </div>
    )

  return (
    <div className="grid grid-cols-2 border gap-4">
      <div className="relative overflow-hidden h-[20rem]">
        <Image
          src={image}
          fill
          sizes="(max-width: 600px) 50vw, (max-width: 1024px) 25vw, 20vw"
          priority={false}
          alt={name}
          className="object-cover"
        />
      </div>
      <ProductForm
        product={product}
        user={session.user}
        categories={categories}
      />
    </div>
  )
}

export default Product
