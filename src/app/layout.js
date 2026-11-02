
import "./globals.css";
import { FoodProvider } from "../context/FoodContext";

export const metadata = {
  title: "FoodtoGood",
  description: "Share surplus food and help communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FoodProvider>
          {children}
        </FoodProvider>
      </body>
    </html>
  );
}
