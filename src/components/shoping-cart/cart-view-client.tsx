'use client'

import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Cart, FilterOptions } from '@/interfaces/Cart/cart'
import { fetchCarts, fetchSingleCart, fetchUserCarts } from '@/services/cart/api'
import CartCard from './cart-card'
import FilterSection from './filter-section'
import SingleCartView from './single-cart-view'

export default function CartViewClient({ initialCarts }: { initialCarts: Cart[] }) {
  const [carts, setCarts] = useState<Cart[]>(initialCarts)
  const [singleCart, setSingleCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    startDate: '',
    endDate: '',
    limit: '',
    sort: 'desc'
  })

  useEffect(() => {
    if (filterOptions.limit || filterOptions.sort !== 'desc') {
      handleFetchCarts()
    }
  }, [filterOptions.limit, filterOptions.sort])

  const handleFetchCarts = async (options: Partial<FilterOptions> = {}) => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchCarts({ ...filterOptions, ...options })
      setCarts(data)
      setSingleCart(null)
    } catch (error) {
      setError('No pudimos cargar los carritos. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleFetchSingleCart = async (cartId: number) => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchSingleCart(cartId)
      setSingleCart(data)
    } catch (error) {
      setError('No pudimos cargar el carrito. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleFetchUserCarts = async (userId: number) => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchUserCarts(userId)
      setCarts(data)
      setSingleCart(null)
    } catch (error) {
      setError('No pudimos cargar los carritos de este usuario.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {!singleCart && (
        <>
          <FilterSection
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            onApplyDateFilters={handleFetchCarts}
          />

          <div className="mb-8 flex justify-center space-x-4">
            <Button onClick={() => handleFetchCarts()} variant="outline">
              Ver Todos los Carritos
            </Button>
            <Button onClick={() => handleFetchUserCarts(3)} variant="outline">
              Ver Carritos del Usuario 3
            </Button>
          </div>

          {error && (
            <div className="bg-destructive/15 border border-destructive text-destructive px-4 py-3 rounded relative mb-8" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carts.map((cart) => (
                <CartCard key={cart.id} cart={cart} onViewDetails={() => handleFetchSingleCart(cart.id)} />
              ))}
            </div>
          )}
        </>
      )}

      {singleCart && (
        <SingleCartView cart={singleCart} onBack={() => setSingleCart(null)} />
      )}
    </div>
  )
}