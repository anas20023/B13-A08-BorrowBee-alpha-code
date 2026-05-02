import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "BorrowBee | User Profile",
  description:
    "Discover, borrow, and manage books online with BorrowBee.",
  keywords: ["online library", "book borrowing", "digital books", "BorrowBee"],
};
const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AuthLayout
