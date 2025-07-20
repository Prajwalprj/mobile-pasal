import Hero from "./compnents/hero";
import Navigation from "./compnents/Navigation";
import Footer from "./compnents/Footer";

import { CartProvider } from "../app/context/cartcontext"; // ✅ import
import "./globals.css";
import Product from "./compnents/Product";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Hero />
          <Product />

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
