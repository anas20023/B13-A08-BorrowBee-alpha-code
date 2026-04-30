import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

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
