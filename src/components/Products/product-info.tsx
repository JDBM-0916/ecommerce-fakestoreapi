import { Product } from "@/interfaces/Products/product"

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-4 flex-1 flex flex-col justify-between">
      <div className="space-y-4">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {product.category}
        </span>
        <h1 className="text-lg font-bold">{product.title}</h1>
        <p className="text-lg font-bold">${product.price}</p>
        <p className="text-gray-600 flex-1 overflow-auto">{product.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Envío Gratis</p>
          <p className="text-sm text-gray-500">2-3 días hábiles</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Garantía</p>
          <p className="text-sm text-gray-500">2 años</p>
        </div>
      </div>
    </div>
  )
}