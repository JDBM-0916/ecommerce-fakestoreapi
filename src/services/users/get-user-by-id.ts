
import { User } from "@/interfaces/users/user";

export async function getUserById(id: string): Promise<User> {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const user = await response.json();
    if (!user) {
      throw new Error("Invalid product data");
    }
    return user;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}
