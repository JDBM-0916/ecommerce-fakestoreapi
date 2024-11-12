import { CircleUserRound, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Navbar() {


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/home" className="text-3xl  font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text tracking-wide p-1">
          Elegance & Home
        </Link>
        <div className=" md:flex items-center space-x-4">
          <Link href={'/shoping_cart'}>
            <Button variant="ghost" size="icon" className="text-white bg-pink-500 hover:bg-pink-600 hover:text-white transition-colors">
              <ShoppingCart />
            </Button>
          </Link>
          <Link href={'/login'}>
            <Button variant="ghost" size="icon" className="text-white bg-pink-500 hover:bg-pink-600 hover:text-white transition-colors">
              <CircleUserRound />
            </Button>
          </Link>

        </div>
      </div>
    </header>
  );
}