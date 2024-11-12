import { Product } from "@/interfaces/Products/product";

export async function getProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await response.json();
    if (!product || !product.image) {
      throw new Error("Invalid product data");
    }
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}
