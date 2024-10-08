import { Karla } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from '@/components/Footer/Footer';

// Importing the Karla font with specific weights
const karla = Karla({ subsets: ["latin"], weight: ["200", "400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className}`}> {/* Apply Karla font */}
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
