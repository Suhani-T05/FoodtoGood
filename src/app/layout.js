
import "./globals.css";
import { FoodProvider } from "../context/FoodContext";
import RoleGuard from "../components/RoleGuard";

export const metadata = {
  title: "FoodtoGood",
  description: "Share surplus food and help communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FoodProvider>
          <RoleGuard>
            {children}
          </RoleGuard>
        </FoodProvider>
      </body>
    </html>
  );
}
