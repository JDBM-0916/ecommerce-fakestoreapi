'use client';
import { useState, useEffect } from 'react';
import ProductGrid from "@/components/Products/product-grid-component";
import { Product } from "@/interfaces/Products/product";
import { getProducts } from "@/services/products/get-products";
import LoadingIndicator from '@/components/ui/loading';

const HomePage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setAllProducts(data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <LoadingIndicator isLoading={isLoading}>
          <ProductGrid products={allProducts} />
        </LoadingIndicator>
      </div>
    </main>
  );
};

export default HomePage;