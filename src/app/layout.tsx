import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/auth/AuthContext";


const MontserratLigh = localFont({
  src: "./fonts/Montserrat-Light.ttf",
  variable: "--font-Montserrat",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Store Online",
  description: "Tienda en línea para la compra de tus productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MontserratLigh.variable} h-full bg-pink-50`}>
        <AuthProvider> {/* Envuelve los children en el AuthProvider */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
