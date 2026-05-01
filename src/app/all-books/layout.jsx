import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"

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
