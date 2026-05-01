import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"
export const metadata = {
  title: "BorrowBee | Browse All Books",
  description:
    "Discover, borrow, and manage books online with BorrowBee.",
  keywords: ["online library", "book borrowing", "digital books", "BorrowBee"],
};
const AllBooksLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default AllBooksLayout
