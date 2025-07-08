import Navigation from "./compnents/Navigation";

import "./globals.css";
// import {Roboto} from "/next/font/google";

// const roboto = Roboto(
//   {
// subset:["latin"],
//   }
// )

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
