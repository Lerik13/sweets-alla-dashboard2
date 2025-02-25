import Image from 'next/image'
import Link from 'next/link'

function ProductCard({ product }) {
  const { id, name, image, order } = product

  return (
    <Link
      href={`/product/${id}`}
      aria-label="Go to product page"
      className="h-[14rem] lg:h-[16rem] xl:h-[22rem] overflow-hidden flex flex-col text-base lg:text-lg font-medium"
    >
      <div className="relative overflow-hidden h-[15rem] lg:h-[14rem] xl:h-[20rem]">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover hover:scale-110 transition-all duration-300 ease-out"
        />
      </div>
      <div className="pl-2 flex items-center justify-between h-[2rem]">
        <span className="truncate">{name}</span>
        <span className="flex items-center justify-center text-primary-500 text-sm border rounded-full w-[1.5rem] h-[1.5rem]">
          {order}
        </span>
      </div>
    </Link>
  )
}

export default ProductCard
