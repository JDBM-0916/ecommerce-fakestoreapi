'use client';

import { useState, useEffect } from 'react';
import ProductGrid from "@/components/Products/product-grid-component";
import { Product } from "@/interfaces/Products/product";
import { getInCategory } from "@/services/categories/get-in-category";
import LoadingIndicator from '@/components/ui/loading';

const MensClothingPage = () => {
  const [mensProducts, setMensProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMensProducts = async () => {
      const data = await getInCategory("men's clothing");
      setMensProducts(data);
      setIsLoading(false);
    };
    fetchMensProducts();
  }, []);

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <LoadingIndicator isLoading={isLoading}>
          <ProductGrid products={mensProducts} />
        </LoadingIndicator>
      </div>
    </main>
  );
};

export default MensClothingPage;