import { Product } from "@/interfaces/Products/product";
import OptionsAndResults from "./options-results-component";
import ProductsCard from "./products-card-component"

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <>
      <OptionsAndResults productsLength={products.length} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}