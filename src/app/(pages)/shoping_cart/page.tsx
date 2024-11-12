import CartViewClient from "@/components/shoping-cart/cart-view-client"

async function getInitialCarts() {
  const res = await fetch('https://fakestoreapi.com/carts', { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch carts')
  return res.json()
}

export default async function CartsPage() {
  const initialCarts = await getInitialCarts()

  return <CartViewClient initialCarts={initialCarts} />
}