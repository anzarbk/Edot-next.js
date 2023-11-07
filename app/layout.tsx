import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const isDark = true

export const metadata = {
  title: "Edot",
  description: "Everything in the .",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar isDark={isDark} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
