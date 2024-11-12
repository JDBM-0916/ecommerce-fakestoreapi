import { FilterOptions, Cart } from "@/interfaces/Cart/cart";


export async function fetchCarts(options: FilterOptions): Promise<Cart[]> {
  const { startDate, endDate, limit, sort } = options;
  let url = "https://fakestoreapi.com/carts";
  const queryParams = new URLSearchParams();
  if (startDate) queryParams.append("startdate", startDate);
  if (endDate) queryParams.append("enddate", endDate);
  if (limit) queryParams.append("limit", limit);
  if (sort) queryParams.append("sort", sort);
  if (queryParams.toString()) url += `?${queryParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch carts");
  return response.json();
}

export async function fetchSingleCart(cartId: number): Promise<Cart> {
  const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
  if (!response.ok) throw new Error("Failed to fetch cart");
  return response.json();
}

export async function fetchUserCarts(userId: number): Promise<Cart[]> {
  const response = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch user carts");
  return response.json();
}
