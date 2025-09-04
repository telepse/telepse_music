import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

// Third-party imports
import { Toaster } from "react-hot-toast";

// Components imports
import { Navbar } from "@/components/menu/navbar";
import { Footer } from "@/components/footer/footer";
import { Analytics } from "@/components/analytics";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Telepse",
  description: "Marketing & Tech Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased`}>
        <Toaster position="top-center" />
        <Analytics />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
