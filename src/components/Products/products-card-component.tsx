import { Product } from "@/interfaces/Products/product";
import Image from "next/image";
import Link from "next/link";

interface ProductsCardProps {
  product: Product;
}

export default function ProductsCard({ product }: ProductsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-md transition-shadow duration-200 relative group">
      <Link href={`/product/${product.id}`} key={product.id} >
        <div className="relative aspect-[5/3] rounded-t-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-5 pb-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-600 text-2xl font-bold">
              ${product.price}
            </span>
          </div>

          <h3 className="mt-3 text-gray-800 font-medium leading-snug cursor-pointer line-clamp-2">
            {product.title}
          </h3>

          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-3 border-t pt-3">
            <span className="text-xs text-gray-500 mt-1 block">
              <span className="font-bold  bg-gray-800 text-transparent bg-clip-text">Category:</span>{" "}
              <span
                className={`font-bold  ${product.category === "electronics"
                  ? "text-green-500"
                  : product.category === "jewelery"
                    ? "text-yellow-500"
                    : product.category === "men's clothing"
                      ? "text-blue-500"
                      : product.category === "women's clothing"
                        ? "text-pink-500"
                        : "text-gray-800"
                  }`}
              >
                {product.category}
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}