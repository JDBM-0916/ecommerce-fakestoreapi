import { useEffect, useState } from 'react';
import { ShoppingCart, User, Calendar, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Cart } from '@/interfaces/Cart/cart';
import { getUserById } from '@/services/users/get-user-by-id';
import { getProductById } from '@/services/products/get-products-by-id';
import { Product } from '@/interfaces/Products/product';


export default function SingleCartView({ cart, onBack }: { cart: Cart; onBack: () => void }) {
  const [userName, setUserName] = useState<string | null>(null);
  const [productDetails, setProductDetails] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUserById(cart.userId.toString());
        setUserName(`${user.name.firstname} ${user.name.lastname}`);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, [cart.userId]);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const products = await Promise.all(
          cart.products.map(async (item) => {
            const product = await getProductById(item.productId.toString());
            return { ...product, quantity: item.quantity }; // Añade quantity
          })
        );
        setProductDetails(products);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }
    fetchProductDetails();
  }, [cart.products]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Detalles del Carrito {cart.id}</span>
          <ShoppingCart className="w-6 h-6 text-primary" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2 text-primary" />
            <span>Usuario: {userName ? userName : "Cargando..."}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-primary" />
            <span>Fecha: {new Date(cart.date).toLocaleDateString()}</span>
          </div>
          <div className="border rounded-md p-4 max-h-64 overflow-y-auto">
            <h3 className="font-semibold mb-2">Listado de Productos:</h3>
            <ul className="space-y-2">
              {productDetails.map((product) => (
                <li key={product.id} className="flex items-center bg-muted p-2 rounded-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className=" aspect-[4/3] w-16 h-16 object-cover mr-4 rounded-md"
                  />
                  <div className="flex-1">
                    <span className="font-semibold">{product.title}</span> <br />
                    <span>Precio: ${product.price}</span>
                  </div>
                  <span className="font-semibold">Cantidad: {product.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onBack} variant="outline" className="w-full bg-pink-500 hover:bg-pink-700 text-white hover:text-white">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Volver a la lista de carritos
        </Button>
      </CardFooter>
    </Card>
  );
}
