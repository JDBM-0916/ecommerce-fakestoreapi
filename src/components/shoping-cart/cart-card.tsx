import { useEffect, useState } from 'react';
import { ShoppingCart, User, Calendar, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Cart } from '@/interfaces/Cart/cart';
import { getUserById } from '@/services/users/get-user-by-id';

export default function CartCard({ cart, onViewDetails }: { cart: Cart; onViewDetails: () => void }) {
  const [userName, setUserName] = useState<string | null>(null);

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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Carrito {cart.id}</span>
          <ShoppingCart className="w-6 h-6 text-primary" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Usuario: {userName ? userName : "Cargando..."}
            </span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Fecha: {new Date(cart.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Package className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Productos: {cart.products.length}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onViewDetails} className="w-full bg-pink-500 hover:bg-pink-700">Ver Detalles</Button>
      </CardFooter>
    </Card>
  );
}
