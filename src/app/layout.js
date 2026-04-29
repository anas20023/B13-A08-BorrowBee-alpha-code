import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "BorrowBee | Online Book Borrowing Platform",
  description:
    "Discover, borrow, and manage books online with BorrowBee.",
  keywords: ["online library", "book borrowing", "digital books", "BorrowBee"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
