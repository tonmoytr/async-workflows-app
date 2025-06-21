import "./globals.css";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import Navbar from "./(components)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React 19 Actions Demo",
  description: "Learning React Actions with Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar></Navbar>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
