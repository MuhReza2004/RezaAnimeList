import "./globals.css";
import NavBar from "@/components/NavBar";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-me-dark`}
        suppressHydrationWarning={true}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
