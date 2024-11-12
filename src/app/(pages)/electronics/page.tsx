'use client';

import { useState, useEffect } from 'react';
import ProductGrid from "@/components/Products/product-grid-component";
import { Product } from "@/interfaces/Products/product";
import { getInCategory } from "@/services/categories/get-in-category";
import LoadingIndicator from '@/components/ui/loading';

const ElectronicsPage = () => {
  const [electronics, setElectronics] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchElectronics = async () => {
      const data = await getInCategory('electronics');
      setElectronics(data);
      setIsLoading(false);
    };
    fetchElectronics();
  }, []);

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <LoadingIndicator isLoading={isLoading}>
          <ProductGrid products={electronics} />
        </LoadingIndicator>
      </div>
    </main>
  );
};

export default ElectronicsPage;