'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";

import { getCategories } from "@/services/categories/get-categories";

interface OptionsResultsComponentProps {
  productsLength: number;
}

const getCategoryFromPath = (path: string): string => {
  const categoryMappings: { [key: string]: string } = {
    "/electronics": "electronics",
    "/jewelery": "jewelery",
    "/mens_clothing": "men's clothing",
    "/womens_clothing": "women's clothing",
  };
  return categoryMappings[path] || "Todas las categorías";
};

const formatCategoryForURL = (category: string): string => {
  const categoryMapping: { [key: string]: string } = {
    electronics: "electronics",
    jewelery: "jewelery",
    "men's clothing": "mens_clothing",
    "women's clothing": "womens_clothing",
  };
  return categoryMapping[category.toLowerCase()] || category.toLowerCase().replace(/ /g, "_").replace(/'/g, "");
};

export default function OptionsAndResults({ productsLength }: OptionsResultsComponentProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas las categorías");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };
    fetchCategories();

    const currentCategory = getCategoryFromPath(pathname);
    setSelectedCategory(currentCategory);
  }, [pathname]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    const formattedCategory = formatCategoryForURL(selectedCategory);

    if (selectedCategory === "Todas las categorías") {
      router.push("/home");
    } else {
      router.push(`/${formattedCategory}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <select
            className="border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none"
            value={selectedCategory}
            onChange={handleCategoryChange}
            data-prefetch={`/${formatCategoryForURL(selectedCategory)}`}
          >
            <option value="Todas las categorías">All Products</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="text-sm text-gray-500">{productsLength} Results</div>
      </div>
    </div>
  );
}