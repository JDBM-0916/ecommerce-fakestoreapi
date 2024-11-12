
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ProductDetails from '@/components/Products/product-details'
import LoadingIndicator from '@/components/ui/loading'
import { getProductById } from '@/services/products/get-products-by-id'

interface ProductPageProps {
  params: { id: string }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProductById(id)

  return (
    <div className="p-4 md:p-8 lg:p-10">
      <div className="container mx-auto">
        <Link href={'/home'} className="flex justify-center mb-4 lg:mb-4 lg:-mt-4 bg-pink-500 w-8 rounded-full p-1 text-white">
          <ArrowLeft size={16} />
        </Link>
      </div>
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <LoadingIndicator isLoading={true} />
      )}
    </div>
  )
}