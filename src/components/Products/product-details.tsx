
import ProductInfo from './product-info'
import { Product } from '@/interfaces/Products/product'
import Image from 'next/image'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) {
    return <div>No se pudo cargar el producto.</div>
  }

console.log(product.image)

  return (
    <>
      {/* Vista Mobile */}
      <div className="bg-white p-4 rounded-2xl h-full shadow-xl hover:shadow-md transition-shadow duration-200 lg:hidden space-y-4 container mx-auto flex flex-col justify-between">
        <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden group flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <ProductInfo product={product} />
      </div>

      {/* Vista Desktop */}
      <div className="hidden lg:flex container mx-auto max-h-[500px] h-[400px]">
        <div className="bg-white rounded-xl shadow-lg w-full flex h-full">
          <div className="w-1/2 p-8 border-r border-gray-100 h-full flex items-center justify-center">
            <div className="relative aspect-[6/3] rounded-lg overflow-hidden transition-shadow duration-200 group w-full h-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="w-1/2 p-8 h-full flex flex-col justify-between">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </>
  )
}